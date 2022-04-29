import Image from "next/image"
import { 
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
 } from "@heroicons/react/outline";

 import { HomeIcon } from "@heroicons/react/solid";

export const Header = () => {
  return (
      <div className="shadow-sm bg-white sticky top-0 z-50 ">

    
    <div className="flex items-center justify-between  max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div className="relative w-24 h-24 justify-between hidden lg:inline-grid">
            <Image layout="fill" objectFit="contain" src="https://links.papareact.com/ocw" />

        </div>
        <div className="relative  w-10 h-10 flex-shrink-0 cursor-pointer lg:hidden">
            <Image layout="fill" objectFit="contain" className="" src="https://links.papareact.com/jjm" />

        </div>
        {/* middle */}

        <div className=" max-w-sm">
            <div className="relative mt-1 p-3 rounded-md">
                
                <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input type="text" className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black" placeholder="Search" />
            </div>
        </div>

        
        {/* right */}
        <div className="flex justify-end space-x-4 items-center">
        <HomeIcon className="navBtn" />
        <MenuIcon className="h-6 md:hidden" />
        <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full justify-center items-center flex animate-pulse text-white">3</div>
        </div>
        <PlusCircleIcon className="navBtn" />
        <UserGroupIcon className="navBtn" />
        <HeartIcon className="navBtn" />
        <img src="/my-image.jpeg"
            className="h-10 rounded-full cursor-pointer"
        />
        </div>
    </div>
    </div>
  )
}
