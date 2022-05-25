import { signOut, useSession } from "next-auth/react"

const MiniProfile = () => {
  const {data: session} = useSession()
  return (
    <>
   
      <div className="flex items-center justify-between mt-14 ml-10 space-x-3">
      <img
       src={session?.user?.image}
       className="rounded-full border p-[2px] w-16 h-16" 
       alt="avatar "/>

       <div>
         <h2 className="font-bold">{session?.user?.username}</h2>
         <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
       </div>
       <button className="text-blue-500" onClick={()=>signOut()}>Sign Out</button>
    </div>
   
    </>
    
    
  )
}

export default MiniProfile