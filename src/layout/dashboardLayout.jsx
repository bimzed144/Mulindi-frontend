import { Outlet } from "react-router-dom";
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

import { BsDashSquare ,BsCompass ,BsPeople ,BsHouse ,BsCalendar, BsPerson} from 'react-icons/bs';
function DashboardLayout(){
  const link = [
    {
      icon : <BsCompass className='icon'/>,
      link : "/admin",
      title : "Dashboard",
    },
    {
      icon : <BsPeople />,
      link : "students",
      title : "Students",
    },
    {
      icon : <BsHouse />,
      link : "classes",
      title: "Classes",
    },
      {
      icon : <BsPerson />,
      link : "users",
      title: "Users",
    },
      {
      icon : <BsCalendar />,
      link : "academic",
      title: "Academic",
    }
  ]

  return(
    <div className='flex min-h-screen '>

    <Sidebar  links={link}/>
   
    
    
 <Navbar  />

 <main className='ml-50 mt-20 w-full p-2'> 
<Outlet />
 </main>
    </div>
   
  
  )
}
export default DashboardLayout;