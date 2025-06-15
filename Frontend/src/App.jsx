import React, { useState } from "react";
import Home from "./Home/Home";
import Books from "./Books/Books";
import { Navigate, Route, Routes } from "react-router";
import Signup from "./Components/Signup";
import Contact from "./Contact/Contact";
import BookDetailsPage from "./BookDetails/BookDetailsPage";
import ErrorPage from "./Components/ErrorPage";
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
                    <Route path="/book_details" element={<BookDetailsPage />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* 404 Error Page */}
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                <Toaster />
            </div>
        </>
    );
}

export default App;
