import React, { useState, useEffect } from "react";
import axios from "axios";

function Filter({ selectedGenres, setSelectedGenres }) {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const res = await axios.get("http://localhost:5717/genre");
                setGenres(res.data);
            } catch (error) {
                console.error("Failed to fetch genres:", error);
            }
        };

        fetchGenres();
    }, []);

    const toggleGenre = (genre) => {
        setSelectedGenres((prev) =>
            prev.includes(genre)
                ? prev.filter((g) => g !== genre)
                : [...prev, genre]
        );
    };

    return (
        <div className="w-full px-5 py-5 rounded-lg shadow-lg grid gap-3 transition duration-300">
            <h3 className="font-mono font-semibold text-2xl text-indigo-600">
                Genres:
            </h3>
            <div className="flex flex-wrap">
                {genres.map((item, index) => (
                    <div
                        key={index}
                        className={`badge mx-1 my-1 cursor-pointer hover:bg-indigo-600 hover:text-white transition 
                            ${
                                selectedGenres.includes(item.name)
                                    ? "bg-indigo-600 text-white border-indigo-600"
                                    : "badge-outline"
                            }`}
                        onClick={() => toggleGenre(item.name)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Filter;
