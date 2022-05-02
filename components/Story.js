
const Story = ({img, username,}) => {
  return (
    <div className="">
        <img className="h-14 w-14 rounded-full 
        p-[1.5px] border-red-500 border-2 object-contain 
        cursor-pointer hover:scale-110 transition-all duration-200" src={img} />
        <p className="text-xs w-14 truncate transform ease-out text-center">{username}</p>
    </div>
  )
}

export default Story