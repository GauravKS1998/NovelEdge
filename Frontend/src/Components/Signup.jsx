import React, { useState } from "react";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Signup() {
    const [pwVisisble, setPwVisible] = useState(false);
    const [cpwVisisble, setCpwVisible] = useState(false);
    const [pw, setPw] = useState("");
    const [cPw, setCPw] = useState("");

    function handleConfirmPw() {
        if (pw === "") {
            alert("Please Enter your password");
        } else if (pw != cPw) {
            alert("Password and Confirm Password should be same");
        }
    }

    function handleForm() {
        handleConfirmPw();
    }

    return (
        <>
            <div className=" min-h-screen w-full grid grid-cols-[85%] md:grid-cols-[50%] lg:grid-cols-[40%] xl:grid-cols-[30%] justify-center items-center">
                <div className=" relative px-8 py-8 border rounded-xl shadow-md">
                    <div className=" grid gap-5">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link
                                to="/"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black dark:text-white hover:text-white"
                            >
                                ✕
                            </Link>
                        </form>
                        <h3 className="font-bold text-lg text-black dark:text-white">
                            Signup
                        </h3>
                        <form
                            method="dialog"
                            className="input_section"
                            onSubmit={handleForm}
                        >
                            <input
                                type="text"
                                placeholder="Enter Fullname"
                                className=" h-10 w-full border border-gray-500 text-black dark:text-white bg-transparent rounded-[5px] px-4 text-sm"
                                style={{ outline: "none" }}
                            />
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className=" h-10 w-full border border-gray-500 text-black dark:text-white bg-transparent rounded-[5px] px-4 text-sm"
                                style={{ outline: "none" }}
                            />
                            <span className=" w-full border border-gray-500 text-black dark:text-white flex items-center bg-transparent rounded-[5px] overflow-hidden">
                                <input
                                    type={pwVisisble ? "text" : "password"}
                                    placeholder="Enter password"
                                    className=" h-10 w-full border-none bg-transparent px-4 text-sm"
                                    style={{ outline: "none" }}
                                    onInput={(e) => setPw(e.target.value)}
                                />
                                <span
                                    className=" flex items-center px-3 h-full outline-none border-l border-gray-500 cursor-pointer"
                                    onClick={() => setPwVisible(!pwVisisble)}
                                >
                                    {pwVisisble ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </span>
                            <span className=" w-full border border-gray-500 text-black dark:text-white flex items-center bg-transparent rounded-[5px]">
                                <input
                                    type={cpwVisisble ? "text" : "password"}
                                    placeholder="Confirm password"
                                    className=" h-10 w-full border-none bg-transparent px-4 text-sm"
                                    style={{ outline: "none" }}
                                    onInput={(e) => setCPw(e.target.value)}
                                />
                                <button
                                    className=" flex items-center px-3 h-full outline-none border-l border-gray-500 cursor-pointer"
                                    onClick={() => setCpwVisible(!cpwVisisble)}
                                >
                                    {cpwVisisble ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </span>
                            <p className="text-sm text-gray-400 justify-self-end">
                                Have an account?{" "}
                                <Link
                                    to="/"
                                    className="text-blue-500 cursor-pointer"
                                    onClick={() =>
                                        document
                                            .getElementById("login")
                                            .showModal()
                                    }
                                >
                                    Login
                                </Link>
                            </p>
                            <button className="btn justify-self-start px-6 py-5 bg-indigo-600 border-none">
                                Signup
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
