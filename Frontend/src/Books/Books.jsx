import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AllBooks from "../Components/AllBooks";

function Books() {
    return (
        <>
            <Navbar />
            <div className=" min-h-screen">
                <AllBooks />
            </div>
            <Footer />
        </>
    );
}

export default Books;
