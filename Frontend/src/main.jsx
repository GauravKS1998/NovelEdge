import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <div className="dark:bg-[#1D232A] dark:text-white bg-white text-black">
            <App />
        </div>
    </BrowserRouter>
);
