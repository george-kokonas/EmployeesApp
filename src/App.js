import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbarr from "./Navbarr.js";
import Employees from "./Employees/Employees";
import Attributes from "./Attributes/attributes";
import AddEmployee from "./Employees/addEmployee/addEmployee";
import EditEmployee from "./Employees/editEmployee/editEmployee";

import Maps from "./Maps/maps";
import AddAttributes from "./Attributes/addAttributes";
function App() {
  return (
    <>
      <Navbarr />
      <div className="App">
        {" "}
        <Routes>
          {" "}
          <Route path="/" element={<Employees />} />{" "}
          <Route path="/attributes" element={<Attributes />} />
          <Route path="/employee/create" element={<AddEmployee />} />
          <Route path="/employee/edit/:empid" element={<EditEmployee />} />
          <Route path="/create" element={<AddAttributes />} />
          <Route path="/map" element={<Maps />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
