
const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10 space-x-3">
      <img
       src="https://links.papareact.com/3ke"
       className="rounded-full border p-[2px] w-16 h-16" 
       alt="avatar "/>

       <div>
         <h2 className="font-bold">Donsmartez</h2>
         <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
       </div>
       <button>Sign Out</button>
    </div>
  )
}

export default MiniProfile