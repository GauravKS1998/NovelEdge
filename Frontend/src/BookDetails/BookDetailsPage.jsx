import React from "react";
import Navbar from "../Components/Navbar";
import BookDetails from "../Components/BookDetails";
import Footer from "../Components/Footer";

function BookDetailsPage() {
    return (
        <>
            <Navbar />
            <div className=" min-h-screen">
                <BookDetails />
            </div>
            <Footer />
        </>
    );
}

export default BookDetailsPage;
