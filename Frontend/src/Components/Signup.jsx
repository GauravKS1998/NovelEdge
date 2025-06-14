import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
    const [pwVisible, setPwVisible] = useState(false);
    const [cpwVisible, setCpwVisible] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const password = watch("password");

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };
        await axios
            .post("http://localhost:5717/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Signup Successfull");
                    navigate(from, { replace: true });
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user));
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err.response.data.message);
                    toast.error(err.response.data.message);
                }
            });
    };

    return (
        <div className="min-h-screen w-full grid grid-cols-[85%] md:grid-cols-[50%] lg:grid-cols-[40%] xl:grid-cols-[30%] justify-center items-center dark:bg-[#262B33]">
            <div className="relative px-8 py-8 rounded-xl shadow-md bg-white dark:bg-[#1D232A] dark:text-white">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full grid gap-[3vh] mt-3"
                >
                    <Link
                        to="/"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black dark:text-white hover:text-white"
                    >
                        ✕
                    </Link>
                    <h3 className="font-bold text-2xl text-black dark:text-white">
                        Signup
                    </h3>

                    {/* Full Name */}
                    <div>
                        <input
                            type="text"
                            placeholder="Enter Fullname"
                            className="h-10 w-full border border-gray-500 text-black dark:text-white bg-transparent rounded px-4 text-sm outline-none"
                            {...register("fullname", {
                                required: "Full name is required",
                            })}
                        />
                        {errors.fullname && (
                            <p className="text-sm text-red-600">
                                {errors.fullname.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="h-10 w-full border border-gray-500 text-black dark:text-white bg-transparent rounded px-4 text-sm outline-none"
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
                        <div className="h-10 w-full flex items-center border border-gray-500 text-black dark:text-white bg-transparent rounded">
                            <input
                                type={pwVisible ? "text" : "password"}
                                placeholder="Enter Password"
                                className="h-full w-full px-4 text-sm bg-transparent outline-none"
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

                    {/* Confirm Password */}
                    <div>
                        <div className="h-10 w-full flex items-center border border-gray-500 text-black dark:text-white bg-transparent rounded">
                            <input
                                type={cpwVisible ? "text" : "password"}
                                placeholder="Confirm Password"
                                className="h-full w-full px-4 text-sm bg-transparent outline-none"
                                {...register("cPassword", {
                                    required: "Please confirm your password",
                                    validate: (value) =>
                                        value === password ||
                                        "Passwords do not match",
                                })}
                            />
                            <span
                                className=" h-full flex items-center px-3 cursor-pointer border-l border-gray-500"
                                onClick={() => setCpwVisible(!cpwVisible)}
                            >
                                {cpwVisible ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        {errors.cPassword && (
                            <p className="text-sm text-red-600">
                                {errors.cPassword.message}
                            </p>
                        )}
                    </div>

                    {/* Login Link */}
                    <p className="text-sm text-gray-400 justify-self-end">
                        Have an account?{" "}
                        <Link to="/" className="text-blue-500 hover:underline">
                            Login
                        </Link>
                    </p>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className=" btn justify-self-start px-6 py-3 bg-indigo-600 text-white border-none"
                    >
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
