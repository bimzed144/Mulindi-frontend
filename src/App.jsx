import Admin from "./pages/admin";
import Animateur from "./pages/animateur";
import { BrowserRouter,Router,Route, Routes } from "react-router-dom";
function App(){

return(
  <>
  <BrowserRouter>
    <Routes>
    <Route path="/admin" element={<Admin />}></Route>
     <Route path="/animateur" element={<Animateur />}></Route>
    </Routes>
    </BrowserRouter>

  </>
)

}
export default App;