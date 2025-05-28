import React from "react";
import Home from "./Home/Home";
import Books from "./Books/Books";
import { Route, Routes } from "react-router";

function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<Books />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
