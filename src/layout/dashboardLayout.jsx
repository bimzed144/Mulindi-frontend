import { Outlet } from "react-router-dom";
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
<<<<<<< HEAD

import { BsDashSquare ,BsCompass ,BsPeople ,BsHouse ,BsCalendar, BsPerson} from 'react-icons/bs';
=======
import DynamicTable from '../components/table';
import { BsDashSquare ,BsCompass ,BsPeople ,BsHouse ,BsCalendar, BsPerson, BsInfoCircle } from 'react-icons/bs';
>>>>>>> ac1c419d5df9831b5c0ee8519ccbe75bb5a187a2
function DashboardLayout(){
  const link = [
    {
      icon : <BsCompass className='icon'/>,
      link : "/admin",
      title : "Dashboard",
    },
    {
      icon: <BsInfoCircle />,
      link: "about",
      title: "About",
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