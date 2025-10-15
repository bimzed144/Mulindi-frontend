import { ImArrowUp, ImArrowUpLeft, ImArrowUpLeft2, ImFileVideo } from "react-icons/im";
import { IoMdArrowRoundUp, IoMdArrowUp, IoMdTrendingUp } from "react-icons/io";

function Card (props){
    return(
        <div  className=" bg-white  text-black flex rounded-[5px] flex-col justify-between p-3 w-80 h-50">
        <div className="flex justify-between">
            <p className="text-2xl ">{props.name}</p>
<div className="bg-blue-200 p-2 log rounded-[3px]">
   {props.photo}
    </div>

            </div> 
            <p className="text-5xl log text-black/70 my-20">{props.number}</p>
           
        
        </div>
    )
}

export default Card;