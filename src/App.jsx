import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Agents from "./Pages/Agents";
import Projects from "./Pages/Projects";
import Navbar from "./Components/Navigation/Navbar";
import FullScreenNav from "./Components/Navigation/FullScreenNav";
import "./index.css";



const App = () => {
 

  return (
    <div className="overflow-x-hidden">
         <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/projects" element={<Projects />} />
      </Routes> 
    </div>
  );
};

export default App;
