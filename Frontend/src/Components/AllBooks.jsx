import React, { useState } from "react";
import { IoSearchOutline, IoFilter } from "react-icons/io5";
import Books from "../../public/Books.json";
import Cards from "./Cards";

const ITEMS_PER_PAGE = 16;

function AllBooks() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(Books.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentBooks = Books.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            {/* Search and Filter */}
            <div className="flex justify-center mt-10">
                <label className="flex items-center gap-2 border border-gray-500 px-3 py-2 rounded-md w-[60vw] md:w-[50vw] bg-transparent">
                    <input
                        type="search"
                        placeholder="Enter Book"
                        className="bg-transparent outline-none flex-grow"
                    />
                    <IoSearchOutline className="text-lg text-gray-500 cursor-pointer" />
                </label>
                <button className="ml-4 px-4 py-2 bg-black text-white rounded-md flex items-center gap-2">
                    <IoFilter className="text-lg" />
                    Filter
                </button>
            </div>

            {/* Books Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mb-6">
                {currentBooks.map((item, index) => (
                    <Cards item={item} key={index} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center space-x-2 mb-10">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 rounded-lg border transition-colors duration-200 border-none ${
                            currentPage === index + 1
                                ? "bg-indigo-600 text-white"
                                : "bg-white text-black hover:bg-gray-200"
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default AllBooks;
