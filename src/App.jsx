import "./App.css"
import DropdownMenu from "./hooks/components/DropDownMenu";
import Faq from "./hooks/components/Faq";
import Navbar from "./hooks/components/Navbar";
import { Routes, Route} from "react-router-dom";
import React from "react";
import TeamComposition from "../src/components/Team";
import Home from "./styles/tailwindcss/components/Home";


function App() {
  return (
    <body>
      <Routes >
        <Route path="/" Component={Home} />
        <Route path="/navbar" Component={Navbar} />
        <Route path="/teams" Component={TeamComposition} />
        <Route />
      </Routes >
    </body>
  );
}

export default App;