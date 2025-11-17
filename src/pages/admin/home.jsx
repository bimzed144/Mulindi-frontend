import Card from "../../components/card";

import Recent from "../../components/recent";
function Home (){
    return (
        <div className="flex gap-7">
                        
 <div >
<div className="flex gap-3">
    <Card cardname="Total Students" />
    <Card cardname="Total Classes" />
    
</div>
 </div>
<Recent />
 {/* {Rcenet} */}
        </div>
    )
}
export default Home;