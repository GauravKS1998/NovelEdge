import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactPage from "../Components/ContactPage";

function Contact() {
    return (
        <>
            <Navbar />
            <div className=" min-h-screen">
                <ContactPage />
            </div>
            <Footer />
        </>
    );
}

export default Contact;
