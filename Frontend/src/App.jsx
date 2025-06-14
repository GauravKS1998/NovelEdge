import React from "react";
import Home from "./Home/Home";
import Books from "./Books/Books";
import { Navigate, Route, Routes } from "react-router";
import Signup from "./Components/Signup";
import Contact from "./Contact/Contact";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./Context/AuthProvider";

function App() {
    const [authUser, setAuthUser] = useAuth();
    console.log(authUser);

    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/books"
                        element={
                            authUser ? <Books /> : <Navigate to="/signup" />
                        }
                    />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Toaster />
            </div>
        </>
    );
}

export default App;
