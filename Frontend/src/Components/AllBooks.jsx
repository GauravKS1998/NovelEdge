import React, { useState, useEffect } from "react";
import { IoSearchOutline, IoFilter } from "react-icons/io5";
import Cards from "./Cards";
import axios from "axios";

const ITEMS_PER_PAGE = 16;

function AllBooks() {
    const [book, setBook] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(
        () => Number(sessionStorage.getItem("allBooksPage")) || 1
    );

    // Fetch books on mount
    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await axios.get("http://localhost:5717/book");
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBooks();
    }, []);

    // Save current page to sessionStorage
    useEffect(() => {
        sessionStorage.setItem("allBooksPage", currentPage);
    }, [currentPage]);

    // Filtered books based on search
    const filteredBooks = book.filter(
        (b) =>
            b.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            b.genre
                ?.join(" ")
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            b.synopsis?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentBooks = filteredBooks.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to page 1 on new search
    };

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            {/* Search and Filter */}
            <div className="flex justify-center mt-10">
                <label className="flex items-center gap-2 border border-gray-500 px-3 py-2 rounded-md w-[60vw] md:w-[50vw] bg-transparent">
                    <input
                        type="search"
                        placeholder="Enter Book"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="bg-transparent outline-none flex-grow"
                    />
                    <IoSearchOutline className="text-lg text-gray-500 cursor-pointer" />
                </label>
                <button className="ml-4 px-4 py-2 bg-black text-white rounded-md flex items-center gap-2 hover:bg-indigo-600 duration-200">
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
