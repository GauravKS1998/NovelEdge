import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Books from "../../public/Books.json";
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
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        // Since Books is local, no need for async
        const filtered = Books.filter((book) => book.volumes.length <= 5);
        setFilteredBooks(filtered);
    }, []);

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
            <h1 className="text-3xl font-bold pb-4">Our Books</h1>
            <Slider {...sliderSettings}>
                {filteredBooks.map((item, index) => (
                    <Cards item={item} key={index} />
                ))}
            </Slider>
        </div>
    );
}

export default Freebook;
