import Admin from "./pages/admin";
import { BrowserRouter,Router,Route, Routes } from "react-router-dom";
function App(){

return(
  <>
  <BrowserRouter>
    <Routes>
    <Route path="/admin" element={<Admin />}></Route>
    </Routes>
    </BrowserRouter>

  </>
)

}
export default App;