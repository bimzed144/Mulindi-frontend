import { ImCompass2 } from "react-icons/im";
function Navitem(props){

    return(
  <button className="flex items-center gap-3 rounded-[10px] hover:bg-blue-100 p-3 ">
    <props.icon className="text-3xl "/><p className="text-xl">{props.name}</p>
    </button>
        
    )
}
export default Navitem;