import Image from "next/image"
import { 
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
 } from "@heroicons/react/outline";

export const Header = () => {
  return (
    <div className="flex justify-between  max-w-6xl">
        {/* left */}
        <div className="relative h-24 w-24 justify-between hidden lg:inline-grid">
            <Image layout="fill" objectFit="contain" src="https://links.papareact.com/ocw" />

        </div>
        <div className="relative  w-10 h-10 flex-shrink-0 cursor-pointer lg:hidden">
            <Image layout="fill" objectFit="contain" className="" src="https://links.papareact.com/jjm" />

        </div>
        {/* middle */}

        <div>
            
            <div>

            </div>
            <input type="text" placeholder="Search" />
        </div>
        {/* right */}
    </div>
  )
}
