import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
function Animateur(){
    return(
        <div>
             <div className="flex h-700 w-full ">
            <Sidebar  name="Animateur"/>
           <Navbar /> 
        </div>
        </div>
       
    )
}
export default Animateur;