import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useBook } from "../Context/BookContext";

function BookDetails() {
    const { selectedBook } = useBook();
    const [book, setBook] = useState(null);
    const [expanded, setExpanded] = useState({});

    useEffect(() => {
        if (selectedBook) {
            setBook(selectedBook);
        }
    }, [selectedBook]);

    const toggleExpanded = (index) => {
        setExpanded((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const truncateWords = (text = "", wordLimit = 40) => {
        const words = text.trim().split(/\s+/);
        return words.length <= wordLimit
            ? text
            : words.slice(0, wordLimit).join(" ") + "...";
    };

    if (!book) {
        return <div className="text-center mt-10">Loading book details...</div>;
    }

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col lg:flex-row lg:gap-16 mb-12">
            {/* Book Cover */}
            <div className="book_img order-1 w-full lg:w-1/3 mt-12 flex items-start">
                <img
                    src={book.img}
                    className="rounded-lg shadow-lg"
                    alt={book.title || "Book cover"}
                />
            </div>

            {/* Book Info */}
            <div className="book_info order-2 w-full lg:w-2/3 grid justify-center content-center mt-12 gap-8">
                <h1 className="text-4xl font-bold text-indigo-600 font-mono">
                    {book.title}
                </h1>
                <h3 className="text-xl font-light font-mono">
                    <b className="text-indigo-600">Genre:</b>{" "}
                    {book.genre?.join(", ")}
                </h3>

                {/* Synopsis */}
                <div className="grid gap-4">
                    <h2 className="text-xl font-mono">Synopsis:</h2>
                    <p className="leading-6 text-sm font-light">
                        {book.synopsis}
                    </p>
                </div>

                {/* Volumes */}
                {book.volumes?.length > 0 && (
                    <div className="book_volumes grid gap-8">
                        {book.volumes.map((vol, index) => {
                            const isExpanded = expanded[index];
                            const description =
                                vol.description || book.synopsis;
                            return (
                                <div
                                    key={index}
                                    className="volume border rounded-lg grid grid-cols-[20%_1fr_max-content] px-5 py-5 box-content gap-8 shadow-lg"
                                >
                                    {/* Volume Image */}
                                    <div>
                                        <img
                                            src={
                                                vol.image ||
                                                "/bookImages/w4.png"
                                            }
                                            alt={`Volume ${index + 1}`}
                                            className="rounded-md"
                                        />
                                    </div>

                                    {/* Volume Description */}
                                    <div className="grid gap-3">
                                        <h2 className="text-2xl font-bold font-mono">
                                            {vol.title || `Volume ${index + 1}`}
                                        </h2>
                                        <p className="leading-6 text-sm font-light">
                                            {isExpanded
                                                ? description
                                                : truncateWords(
                                                      description,
                                                      40
                                                  )}
                                        </p>
                                        <button
                                            className="text-indigo-600 text-sm font-semibold flex items-center gap-1"
                                            onClick={() =>
                                                toggleExpanded(index)
                                            }
                                        >
                                            {isExpanded ? (
                                                <>
                                                    <FaMinus />
                                                    Show Less
                                                </>
                                            ) : (
                                                <>
                                                    <FaPlus />
                                                    Show More
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    {/* Download Button */}
                                    <div className="justify-self-end flex items-start">
                                        <a
                                            href={vol.downloadLink}
                                            className="btn py-3 px-4 bg-indigo-600 text-white border-none rounded-md shadow hover:bg-indigo-700 transition"
                                            download
                                        >
                                            Download
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookDetails;
