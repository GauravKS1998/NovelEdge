import React from "react";
import { FaEnvelope } from "react-icons/fa";

function Banner() {
    return (
        <>
            <div className="banner max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
                <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
                    <div className=" grid gap-12">
                        <h1 className=" text-4xl font-bold">
                            Hello, Welcome to{" "}
                            <span className=" text-indigo-600 logo_name logo">
                                NOVELEDGE
                            </span>
                        </h1>
                        <span className=" space-y-4 text-xl">
                            <p>
                                No ads. No clutter. Just stories—pure and
                                powerful.
                            </p>
                            <p>
                                So take a deep breath, grab a virtual seat, and
                                start your journey. Because every book you open
                                is a new world waiting to welcome you.
                            </p>
                        </span>
                        <label
                            className="input w-full bg-transparent border-gray-500"
                            style={{ outline: "none" }}
                        >
                            <b className=" text-sm text-gray-500">
                                <FaEnvelope />
                            </b>
                            <input
                                type="text"
                                className="grow"
                                placeholder="index.php"
                            />
                        </label>
                    </div>
                    <button className="btn mt-6 py-5 px-4 cursor-pointer bg-indigo-600 border-none">
                        Secondary
                    </button>
                </div>
                <div className=" order-1 w-full md:w-1/2 grid justify-center content-center mt-12 md:mt-0">
                    <img src="/tree6.png" className=" w-full" alt="" />
                </div>
            </div>
        </>
    );
}

export default Banner;
