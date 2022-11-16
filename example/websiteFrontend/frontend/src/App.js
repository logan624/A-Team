import {BrowserRouter, Routes, Route} from "react-router-dom";
import UniversityList from "./components/UniversityList";
import AddUniversity from "./components/AddUniversity";
import EditUniversity from "./components/EditUniversity";

function App() {
  return (
      <BrowserRouter>
        <div className={"container"}>
          <Routes>
            <Route path={"/"} element={<UniversityList/>}/>
            <Route path={"/add"} element={<AddUniversity/>}/>
            <Route path={"/edit/:id"} element={<EditUniversity/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  )
}
export default App;