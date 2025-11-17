function Card(props){
    return(
        <div className=" flex flex-col gap-3 p-3 w-90 h-30 bg-[#f3ffff] border  rounded-[5px] border-[#bee0e2]">
            <div>
 <h1>{props.cardname}</h1>
 {props.icon}
 </div>
 <h2 className="text-4xl ">40</h2>
        </div>
    )
}
export default Card;