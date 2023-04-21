import DataTable from "./Components/DataTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DataTable />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
