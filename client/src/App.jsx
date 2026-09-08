


import "./App.css";

import { createRoot } from "react-dom/client";
import "./index.css";

import "sweetalert2/src/sweetalert2.scss";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BSPestControlSite from "./BSPestControlSite";






function AppRouter() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<BSPestControlSite/>}/>
      



 


    </Routes>
   </Router>
  );
}

export default AppRouter;


