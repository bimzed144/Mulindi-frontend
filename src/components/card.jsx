function Card(props){
    return(
        <div className=" flex flex-col gap-3 p-3 w-64 h-30 bg-[#f3ffff] border  rounded-[5px] border-[#bee0e2]">
            <div>
<h1 className="">{props.cardname}</h1>
 {props.icon}
 </div>
 <h2 className="text-4xl ">{props.cardname =="Total bill"?  props.number+"Rwf" : props.number}</h2>
        </div>
    )
}
export default Card;