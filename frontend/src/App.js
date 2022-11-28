import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";
// import HomePage from "./components/HomePage";

function App() {
  return (
      <BrowserRouter>
        <div className={"container"}>
          <Routes>
            {/* <Route path={"/"} element={<HomePage/>}/> */}
            <Route path={"/"} element={<ItemList/>}/>
            <Route path={"/add"} element={<AddItem/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  )
}
export default App;