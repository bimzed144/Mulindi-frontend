
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
const arr=[{
    name:'schoolfees',
    amount:100000 +"RWf",
    status :"paid"
},
{
    name:'Ram',
    amount:100000 +"RWf",
    status :"pending"
},
{
    name:'Ticket',
    amount:100000 +"RWf",
    status :"paid"
},
{
    name:'Matress',
    amount:100000 +"RWf",
    status :"unpaid"
}
];
function Page(props){
    const [close , setclose] =useState(true);
function Close(){
    setclose(false);
}


    return(
        <>
       {props.isOpen && close && (
        
         <div className="fixed inset-0 bg-black/70 flex  items-center  justify-center z-50">
      <div className="bg-white rounded-xl flex flex-col gap-20 p-6 w-150 h-120 relative">
<div className="flex  justify-between">
    <span className="flex gap-3 items-center">
        <BsPersonCircle  className="text-4xl"/>
        <h1 className="flex gap-30">BImenyimana olivier <span className=" text-black text-bold text-xl p-1 ">L5sod</span></h1>
    </span>
    <button className="text-xl" onClick={Close}> ✕</button>
</div>
<div className="flex flex-col gap-3">
    <h1 className="font-bold ">Payments</h1>
    <table className=" overflow-hidden rounded-[3px]">
        <tr className="border-b-1  text-[13px] rounded-xl text-black/70 text-left bg-[#eef1f3]">
            <th className="p-3">Payment item</th>
            <th>Amount</th>
            <th>Status</th>
        </tr>
       
           {
            arr.map((item)=>{
                return(
                     <tr className="border-b-1  text-black/60">
                    <td className="p-3"> {item.name} </td>
                    <td> {item.amount}</td>
                    <td> {item.status}</td>
                     </tr>
                )

            })
           }
       
    </table>
</div>
        </div>
        </div>
       )}
       </>
        
    )
}
export default Page;