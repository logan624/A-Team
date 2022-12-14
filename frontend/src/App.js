import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";
import HomePage from "./components/HomePage";
import ProfitEst from "./components/ProfitEst";

function App() {
  return (
      <BrowserRouter>
        <div className={"container"}>
          <Routes>
            <Route path={"/"} element={<HomePage/>}/> 
            <Route path={"/List"} element={<ItemList/>}/>
            <Route path={"/Add"} element={<AddItem/>}/>
            <Route path={"/Profits"} element={<ProfitEst/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  )
}
export default App;
