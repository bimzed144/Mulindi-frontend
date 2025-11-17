import { useState } from "react";
import { BsSearch ,BsPersonCircle } from "react-icons/bs";
import { FaDoorOpen ,FaDoorClosed } from "react-icons/fa";


function Navbar(){


const [isOpen , setOpen] = useState(false);

function openLogout(){
    setOpen((prev)=>!prev);
}





    return(
        <div className ="fixed top-0 border-black/30 border-b-1 right-0 px-10 h-20 left-50 flex  bg-white items-center justify-between">
<div className="flex items-center justify-between border rounded-[5px] w-100 p-1 ">
    <input type="search" placeholder="Search...." className="w-80 h-8  outline-0"/>
<BsSearch className="text-xl" />
</div>
<div className=" ">
    <div>

    </div>
    <div onClick={openLogout} className="flex relative items-center hover:rounded hover:bg-gray-100  p-1 gap-3">
<BsPersonCircle className="text-4xl "/>
<span className="flex  flex-col ">
    <h1 className="text-[15px]">Kalisa jean baptiste</h1>
<h2 className="text-[12px]">DOD</h2>
</span>
{
    isOpen && (
        <div className="w-46 absolute  top-13 -left-[0.2px] h-10  bg-white">
<button className="bg-gray-200 flex gap-x-6 items-center p-2 rounded-[2px] hover:bg-blue-100"><FaDoorOpen />Log out</button>
</div>
    )
}
    </div>
</div>
        </div>
    )
}
export default Navbar;