import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Books from "../../public/Books.json";
import Cards from "./Cards";

function AllBooks() {
    return (
        <>
            <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 grid justify-center">
                <div className="grid justify-center mt-10">
                    <label
                        className="input px-3 py-2 border rounded-md flex items-center gap-2 outline-none w-[85vw] md:w-[50vw]"
                        style={{ outline: "none" }}
                    >
                        <input
                            type="search"
                            required
                            placeholder="Enter Book"
                        />
                        <b className="text-lg text-gray-500 cursor-pointer">
                            <IoSearchOutline />
                        </b>
                    </label>
                </div>
                <div className=" mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {Books.map((item, index) => {
                        return <Cards item={item} key={index} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default AllBooks;
