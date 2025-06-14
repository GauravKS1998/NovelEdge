import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import AuthProvider from "./Context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AuthProvider>
            <div className="dark:bg-[#1D232A] dark:text-white bg-white text-black">
                <App />
            </div>
        </AuthProvider>
    </BrowserRouter>
);
