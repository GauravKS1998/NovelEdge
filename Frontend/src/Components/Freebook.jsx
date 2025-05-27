import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Books from "../../public/Books.json";
import Cards from "./Cards";

function Freebook() {
    const [filterData, setFilterData] = useState([]);
    useEffect(() => {
        const fetchAndFilterBooks = async () => {
            // Simulate async fetch if needed, or process large data
            const data = await Books;
            const filterData = data.filter((book) => {
                return book.volumes.length <= 5;
            });
            setFilterData(filterData);
        };

        fetchAndFilterBooks();
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: false,
        prevArrow: false,
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
                    initialSlide: 2,
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

    return (
        <>
            <div className=" banner max-w-screen-2xl container mx-auto md:px-20 px-4 mb-10 mt-10 2xl:mt-0">
                <div>
                    <h1 className=" text-3xl font-bold pb-2">Our Books</h1>
                </div>
                <div>
                    <Slider {...settings}>
                        {filterData.map((item, index) => {
                            return <Cards item={item} key={index} />;
                        })}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Freebook;
