import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";

const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            },
        },
    ],
};

function Freebook() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get("http://localhost:5717/book");
                const filtered = response.data.filter(
                    (book) => book.volumes.length <= 5
                );
                setBooks(filtered);
            } catch (err) {
                setError("Failed to load books");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
            <h1 className="text-3xl font-bold pb-4">Our Books</h1>

            {loading && <p>Loading books...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && books.length === 0 && (
                <p>No books available at the moment.</p>
            )}

            {!loading && books.length > 0 && (
                <Slider {...sliderSettings}>
                    {books.map((item, index) => (
                        <Cards item={item} key={item._id || index} />
                    ))}
                </Slider>
            )}
        </div>
    );
}

export default Freebook;
