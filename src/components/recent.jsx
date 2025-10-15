import {User } from "lucide-react";
function Recent(props){

    return(
        <div className="flex p-3 gap-2 rounded-[10px] hover:bg-blue-200">
    <User /> <h1 className="text-[20px]"> {props.rname}</h1> <h1 className="ml-20 ">{props.time}</h1>
</div>
    )
}
export default Recent;