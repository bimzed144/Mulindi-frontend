import { BsPerson } from "react-icons/bs";
function User (props){
    return(
            <div className="">   
            <div className="flex flex-col bg-gray-50  p-2 rounded-[4px] border border-[#D1D9E0] w-200  ">
                <div className="flex items-center gap-2 ">
                    <BsPerson  className="text-xl"/>
            <h1 className="font-semibold">{props.name}</h1>
                </div>
                <h1 className="text-[13px] text-green-800 ">{props.role}</h1>
            
            </div>
            
             </div>
    )
}
export default User;