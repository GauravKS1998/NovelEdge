// src/Components/ErrorPage.jsx
import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <p className="text-2xl text-gray-700 mb-2">Page Not Found</p>
            <p className="text-gray-500 mb-6">
                Sorry, the page you are looking for doesn't exist.
            </p>
            <Link
                to="/"
                className="btn px-4 py-2 bg-indigo-600 text-white border-none hover:bg-indigo-700"
            >
                Go to Home
            </Link>
        </div>
    );
}

export default ErrorPage;
