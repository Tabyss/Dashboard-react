import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// layout
import Sidebar from "./assets/components/layout/sidebar";
import Main from "./assets/components/layout/Main";
import Dashboard from "./assets/components/pages/Dashboard";

import './assets/css/main.css'

function App() {
  return (
    <div className="App">
        <Sidebar />
        <Main />
    </div>
  );
}

function Link() {
  return (
    <Routes>
    <Route path="/" element={ <Dashboard/> }></Route>
    </Routes>
  );
}

export default App;
