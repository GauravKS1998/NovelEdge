import React, { createContext, useContext, useState, useEffect } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [selectedBook, setSelectedBook] = useState(() => {
        // Try to load from sessionStorage if exists
        const storedBook = localStorage.getItem("selected_book");
        return storedBook ? JSON.parse(storedBook) : null;
    });

    useEffect(() => {
        if (selectedBook) {
            localStorage.setItem("selected_book", JSON.stringify(selectedBook));
        }
    }, [selectedBook]);

    return (
        <BookContext.Provider value={{ selectedBook, setSelectedBook }}>
            {children}
        </BookContext.Provider>
    );
};

export const useBook = () => useContext(BookContext);
