import { NavLink } from "react-router-dom"

function Sidebar({links}){
    return(
        <div className ="h-[100vh]  fixed w-50 p-4 border-l-2 border border-black/30 flex flex-col  justify-between">
<h1 className = "text-blue-00 text-lg text-blue-500 font-bold bold">MULINDI SCS</h1>

<div className="flex flex-col gap-3 ">
    {links.map((link,index)=>(
   <NavLink 
            key={index}
            to={link.link}
             end={link.link === "/admin"} 
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md transition ${
                isActive ? "bg-blue-100 text-black" : "hover:bg-gray-100"
              }`
            }
          >
            {link.icon}
            <span className="text-sm font-normal">{link.title}</span>
          </NavLink>
    ))}
</div>

<div className =" p-2 bg-blue-100 text-center rounded-xl">
    <p className="text-lg ">Term 1</p>
    <p className="text-blue-300">2023 -2025</p>
    </div>
        </div>
    )
}
export default Sidebar;