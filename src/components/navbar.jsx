import { ImNotification } from "react-icons/im";
import { ImUser } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { ImSearch } from "react-icons/im";

function Navbar(){
    return(
        <div className="flex justify-between p-2 items-center  h-20 w-full border-b-1 border-black/30">
      

           <div className="flex items-center gap-4 border h-12 rounded-[5px] justify-between px-2 w-140">
            <input type="search" name="" id="" className="w-120 text-xl outline-none" placeholder="Search...." />
            <div><ImSearch className="text-xl"/></div>
            </div>
           <div className="flex gap-7 mt-2">
            <div>
                <IoMdSettings className="text-4xl"/>

            </div>
             <div>
                <IoMdNotifications className="text-4xl"/>
                
            </div>
             <div className="flex -mt-2 gap-3 items-center">

                <ImUser className="text-4xl"/>
                <div className="text-[15px]">
                    <h1 className="text-[15px]">Bonaventure </h1>
                    <h6 className="text-[12px]">Dod</h6>
                </div>
                
            </div>
           </div>
        </div>
    )
}
export default Navbar;