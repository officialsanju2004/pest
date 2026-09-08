import { createRoot } from "react-dom/client";
import "./index.css";

import "sweetalert2/src/sweetalert2.scss";


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppRouter from "./App";

 
createRoot(document.getElementById("root")).render(

    <AppRouter/>

);
