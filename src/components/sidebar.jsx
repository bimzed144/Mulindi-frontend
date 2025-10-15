import { ImBell } from "react-icons/im";
import { ImCompass2 } from "react-icons/im";
import { Compass, Users, School,UserCheck, Calendar ,BookOpen } from "lucide-react";
import Navitem from "./nav-item";

function Sidebar(){
    return(
        <div className="w-full  flex-col justify-between flex p-5 h-200 bg-white border-r-1"> 
            <div>
                <h1 className="text-3xl text-blue-500 log">Mulindi SCAS</h1>

            </div>
            <div className="">
                <div className="-mt-20  gap-10 flex flex-col">
                      <Navitem name="Dashboard" icon ={Compass}/>
                      <Navitem name="Students" icon ={UserCheck}/>
                    <Navitem name="Classes" icon ={BookOpen}/>
                   <Navitem name="Users" icon ={Users}/>
                     <Navitem name="Academic year"  icon ={Calendar}/>
                     
                </div>
            </div>
            <div className="w-full ">
              <h1 className="text-xl">Term 3</h1>
              <p className="text-xl">2025-2024</p>
            </div>
        </div>
    )
}
export default Sidebar;