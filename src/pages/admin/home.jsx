import Card from "../../components/card";
import Circle from '../../components/circle';
import Recent from "../../components/recent";
function Home (){
    return (
        <div className="flex flex-col gap-7">
<div className="flex gap-3">
    <Card cardname="Total Students" number={12}/>
    <Card cardname="Total Classes" number={12}/>
    <Card cardname="Total Users" number={30}/>
    <Card cardname="Total bill" number={20000}/>
</div>
<div className="flex justify-between" >
    <div className="flex ">
<Circle number={12} user="Admin"/>
<Circle number={12} user="Bursar"/>
<Circle number={12} user="Matron"/>
<Circle number={12} user="Patron"/>
<Circle number={12} user="Dod"/>
<Circle number={12} user="Store keeper" isLast={true}/>
    </div>
    <Recent />
</div>
<div>
    <h1>Graph </h1>
</div>
 </div>

      
    )
}
export default Home;