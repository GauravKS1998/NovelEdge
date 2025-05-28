import React, { useState } from "react";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Login() {
    const [pwVisisble, setPwVisible] = useState(false);
    return (
        <>
            <div className="">
                <dialog id="login" className="modal">
                    <div className="modal-box dark:bg-[#1D232A] dark:text-white grid gap-5">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>
                        <h3 className="font-bold text-lg text-black dark:text-white">
                            Login
                        </h3>
                        <div className="input_section">
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className=" h-10 w-full border border-gray-500 text-black dark:text-white bg-transparent rounded-[5px] px-4 text-sm"
                                style={{ outline: "none" }}
                            />
                            <span className=" w-full border border-gray-500 text-black dark:text-white flex items-center bg-transparent rounded-[5px]">
                                <input
                                    type={pwVisisble ? "text" : "password"}
                                    placeholder="Enter password"
                                    className=" h-10 w-full border-none bg-transparent px-4 text-sm"
                                    style={{ outline: "none" }}
                                />
                                <span
                                    className=" flex items-center px-3 h-full outline-none border-l border-gray-500 cursor-pointer"
                                    onClick={() => setPwVisible(!pwVisisble)}
                                >
                                    {pwVisisble ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </span>
                            <p className="text-sm text-gray-400 justify-self-end">
                                Not registered?{" "}
                                <Link
                                    to="/signup"
                                    className="text-blue-500 cursor-pointer"
                                >
                                    Signup
                                </Link>
                            </p>
                            <button className="btn justify-self-start px-6 py-5 bg-indigo-600 border-none">
                                Login
                            </button>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    );
}

export default Login;
