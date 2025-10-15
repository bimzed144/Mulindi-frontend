import Card from "./card";
import Recent from "./recent";
import { Compass, Users, School,UserCheck, Calendar ,BookOpen ,User } from "lucide-react";
function Content (){
    return(
        <div className="bg-[#eef1f3] w-full h-400 p-6 flex">
<div className="w-[70%]">
    <div className="card gap-10 flex">
        <Card name="Students" number={100} photo={<UserCheck />}/>
        <Card name="Classes" number={15} photo={<BookOpen />}/>
        <Card name="Users" number={5} photo={<Users />}/>
    </div>
    <div className="grap">

    </div>
</div>

<div className="hor p-4  bg-white border-black/20 border rounded-[10px] w-[30%]">
    <h1 className="text-center text-3xl log">Recent students</h1>
    <div className="mt-5 flex flex-col gap-2">

<Recent rname="Niyonshuti abdoul Djabar" time="12-05-25 00:20 AM"/>
<Recent rname="BImenyimana olivier" time="12-05-25 11:20 AM"/>


    </div>
</div>
        </div>
    )
}
export default Content;