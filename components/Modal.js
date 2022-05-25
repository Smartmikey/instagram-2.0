import { Dialog, Transition } from "@headlessui/react";
import { CameraIcon } from "@heroicons/react/outline";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useSession } from "next-auth/react";
import { Fragment,useRef, useState } from "react";
import { useRecoilState } from "recoil"
import { modalState } from "../Atoms/ModalAtom"
import { db, storage } from "../firebase";

const Modal = () => {

    const {data: session} = useSession()

    const [open, setOpen]= useRecoilState(modalState);
    const filePickerRef = useRef(null);
    const captionRef = useRef(null);
    const [loading, setLoading] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null);

    const addImageToPost = e => {
        const reader = new FileReader();

        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        };

        reader.onload = (readerEvent) => {;
            setSelectedFile(readerEvent.target.result);
        }; 
    }

    const uploadPost = async () => {
        if (loading) return;

        setSelectedFile(true);

        const docRef = await addDoc(collection(db, "posts"), {
            username: session.user.username,
            caption: captionRef.current.value,
            profileImg: session.user.image,
            timeStamp: serverTimestamp(),
        })

        console.log("New doc added to collection with id", docRef.id);

        const imageRef = ref(storage, `posts/${docRef.id}/image`);

        await uploadString(imageRef, selectedFile, "data_url")
        .then(async snapshot => {
            const downloadUrl = await getDownloadURL(imageRef);
            await updateDoc(doc(db, "posts", docRef.id), {
                image: downloadUrl
            })
        });

        setOpen(false);
        setLoading(false);
        setSelectedFile(null);
         
    }
  return (
    <Transition.Root show={open} as={Fragment}>
         <Dialog as="div" className="fixed z-10 inset-0 overflow-x-auto "
         onClose={()=>setOpen(false)}
         >
             <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                 <Transition.Child
                 as={Fragment}
                 enterFrom="opacity-0"
                 enter="ease-out duration-300"
                 enterTo="opacity-100"
                 leaveFrom="opacity-100"
                 leave="ease-in duration-200"
                 leaveTo="opacity-0"
                 >
                     <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                 </Transition.Child>
                {/* Trick for browsers to center the dialog text */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>

                <Transition.Child
                 as={Fragment}
                 enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                 enter="ease-out duration-300"
                 enterTo="opacity-100 translate-y-0 sm:scale-100"
                 leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                 leave="ease-in duration-200"
                 leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                 >
                     <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 
                     text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                         {selectedFile ? (
                             <>
                             <img onClick={()=> setSelectedFile(null)} src={selectedFile} alt="uploded image" />
                             </>
                         ): (
                                <div>
                                <div onClick={()=> filePickerRef.current.click()} className="mx-auto flex items-center justify-center rounded-full h-12 w-12 bg-red-100 cursor-pointer">
                                <CameraIcon className="h-6 w-6 text-red-600" />
                            </div>
                            <div className="mt-3 text-center sm:mt-5">
                                <Dialog.Title
                                as="h3"
                                className="text-lg leading-6 font-medium text-gray-900"
                                >
                                    Upload a photo
                                </Dialog.Title>

                                <div>
                                    <input onChange={addImageToPost} ref={filePickerRef} type="file" hidden />
                                </div>
                                </div>
                                </div>
                            )}
                        <div>
                           

                            
                                <div>
                                <div className="mt-2">
                                    <input type="text" ref={captionRef} className="border-0 text-center focus:ring-0 w-full" placeholder="Please enter a caption" />
                                </div>

                            </div>
                        </div>

                         <div className="mt-5 sm:mt-6 ">
                            <button
                            disabled={!selectedFile}
                            className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4
                            py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-0 
                            focus:ring-offset-2 focus:ring-red-500 sm:text-sm hover:disabled:bg-gray-300 disabled:bg-gray-300 
                            disabled:cursor-not-allowed
                            "
                            onClick={()=> uploadPost}
                            >
                               {
                                   loading? "Upolading ..." : "Upload post"
                               }
                            </button>
                         </div>
                     </div>
                 </Transition.Child>
            </div>
         </Dialog>
    </Transition.Root>
  )
}

export default Modal