import React from "react";
import Home from "./Home/Home";
import Books from "./Books/Books";
import { Route, Routes } from "react-router";
import Signup from "./Components/Signup";
import Contact from "./Contact/Contact";

function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
