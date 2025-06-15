import React, { useState, useEffect, useMemo } from "react";
import { IoSearchOutline, IoFilter } from "react-icons/io5";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import Cards from "./Cards.jsx";
import axios from "axios";
import Filter from "./Filter.jsx";

const ITEMS_PER_PAGE = 16;

function AllBooks() {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(
        () => Number(sessionStorage.getItem("allBooksPage")) || 1
    );
    const [openFilter, setOpenFilter] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const { data } = await axios.get("http://localhost:5717/book");
                setBooks(data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        fetchBooks();
    }, []);

    useEffect(() => {
        sessionStorage.setItem("allBooksPage", currentPage);
    }, [currentPage]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const filteredBooks = useMemo(() => {
        return books.filter((b) => {
            const matchesSearch =
                b.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                b.genre
                    ?.join(" ")
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                b.synopsis?.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesGenre =
                selectedGenres.length === 0 ||
                selectedGenres.some((genre) => b.genre?.includes(genre));

            return matchesSearch && matchesGenre;
        });
    }, [books, searchQuery, selectedGenres]);

    const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);
    const currentBooks = filteredBooks.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            {/* Search & Filter Header */}
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
                <button
                    onClick={() => setOpenFilter((prev) => !prev)}
                    className="ml-4 px-4 py-2 bg-black text-white rounded-md flex items-center gap-2 hover:bg-indigo-600 duration-200"
                >
                    {openFilter ? (
                        <>
                            <RiArrowUpDoubleLine className=" text-xl" />
                            Filter
                        </>
                    ) : (
                        <>
                            <RiArrowDownDoubleLine className=" text-xl" />
                            Filter
                        </>
                    )}
                </button>
            </div>

            {/* Genre Filter */}
            {openFilter && (
                <div className="mt-6">
                    <Filter
                        selectedGenres={selectedGenres}
                        setSelectedGenres={setSelectedGenres}
                    />
                </div>
            )}

            {/* Book Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
                {currentBooks.map((item) => (
                    <Cards item={item} key={item._id || item.title} />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center space-x-2 mb-10">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 rounded-lg border transition duration-200 ${
                                currentPage === index + 1
                                    ? "bg-indigo-600 text-white"
                                    : "bg-white text-black hover:bg-gray-200"
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AllBooks;
