import { BsPerson } from "react-icons/bs";
function Recent (){

    return (
        <div className="flex  flex-col gap-2">
    <h1 className="text-xl font-semibold text-black/90">Recent students</h1>
<div className="flex bg-gray-200 justify-between p-2 rounded-[4px] w-75 items-center ">
    <div className="flex items-center ">
        <BsPerson  className="text-xl"/>
<h1>Nyiro</h1>
    </div>
    <h1 className="text-[10px]">12-04-25 11:33 AM</h1>

</div>

 </div>
    )
}
export default Recent ;