import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import AuthProvider from "./Context/AuthProvider.jsx";
import { BookProvider } from "./Context/BookContext.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <BookProvider>
            <AuthProvider>
                <div className="dark:bg-[#1D232A] dark:text-white bg-white text-black">
                    <App />
                </div>
            </AuthProvider>
        </BookProvider>
    </BrowserRouter>
);
