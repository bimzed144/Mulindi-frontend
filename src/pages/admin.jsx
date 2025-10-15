import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Content from "../components/content-admin";
function Admin(){
    return(
        <div className="flex w-full">

           <div className="flex h-700 w-[15%]">
        <Sidebar name="MULINDI" link="30"/>
           </div>

           <div className=" w-[85%] ">
         <Navbar />
         <Content />

           </div>

        </div>
    )
}
export default Admin;