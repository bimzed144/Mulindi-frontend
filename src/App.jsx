import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard";
import Students from "./pages/admin/students";
import Users from "./pages/admin/users";
import Classes from "./pages/admin/classes";
import Academic from "./pages/admin/academic";
import Login from "./pages/login";
import Home from "./pages/admin/home";

function App() {
  return (
   
      <Routes>
        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<Home/>} />
          <Route path="students" element={<Students />} />
          <Route path="users" element={<Users />} />
          <Route path="classes" element={<Classes />} />
          <Route path="academic" element={<Academic />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
  
  );
}

export default App;