import axios from "axios";
import "./App.css";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Pagination from "./Pagination";

function App() {
  const itemsperpage = 10;
  const [currentpage, setcurrentpage] = useState(1);
  const [data, setData] = useState("");

  return (
    <>
      <Dashboard />
    </>
  );
}
//////////////////////////////////////////////

//To align items horizontally, use justify-content

//To align items vertically, use align-items (when using flex-direction: row)

export default App;
