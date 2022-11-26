import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemList from "./components/ItemList";
// import AddUniversity from "./components/AddUniversity";
// import EditUniversity from "./components/EditUniversity";

function App() {
  return (
      <BrowserRouter>
        <div className={"container"}>
          <Routes>
            <Route path={"/"} element={<ItemList/>}/>
            {/* <Route path={"/add"} element={<AddUniversity/>}/> */}
            {/* <Route path={"/edit/:id"} element={<EditUniversity/>}/> */}
          </Routes>
        </div>
      </BrowserRouter>
  )
}
export default App;