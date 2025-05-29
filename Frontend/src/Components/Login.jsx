import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";

function Login() {
    const [pwVisible, setPwVisible] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Login Data:", data);
        // Optionally close modal after login
        const dialog = document.getElementById("login");
        if (dialog) dialog.close();
    };

    return (
        <dialog id="login" className="modal">
            <div className="modal-box dark:bg-[#1D232A] dark:text-white grid gap-5 relative">
                {/* Close Button */}
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black dark:text-white hover:text-white">
                        ✕
                    </button>
                </form>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full grid gap-[3vh] mt-3"
                >
                    <h3 className="font-bold text-2xl text-black dark:text-white">
                        Login
                    </h3>

                    <div className="input_section grid gap-4">
                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="h-10 w-full border border-gray-500 text-black dark:text-white bg-transparent rounded-[5px] px-4 text-sm outline-none"
                                {...register("email", {
                                    required: "Email is required",
                                })}
                            />
                            {errors.email && (
                                <p className="text-sm text-red-600">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <div className="h-10 w-full flex items-center border border-gray-500 text-black dark:text-white bg-transparent rounded-[5px]">
                                <input
                                    type={pwVisible ? "text" : "password"}
                                    placeholder="Enter Password"
                                    className="h-10 w-full px-4 text-sm bg-transparent outline-none"
                                    {...register("password", {
                                        required: "Password is required",
                                    })}
                                />
                                <span
                                    className=" h-full flex items-center px-3 cursor-pointer border-l border-gray-500"
                                    onClick={() => setPwVisible(!pwVisible)}
                                >
                                    {pwVisible ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            {errors.password && (
                                <p className="text-sm text-red-600">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Signup Link */}
                        <p className="text-sm text-gray-400 justify-self-end">
                            Not registered?{" "}
                            <Link
                                to="/signup"
                                className="text-blue-500 hover:underline"
                            >
                                Signup
                            </Link>
                        </p>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn justify-self-start px-6 py-3 bg-indigo-600 text-white border-none"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    );
}

export default Login;
