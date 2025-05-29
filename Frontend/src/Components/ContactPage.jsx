import React from "react";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";

function ContactPage() {
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
        <>
            <div
                className=" w-full bg-contact-intro bg-cover bg-center bg-gray-500 bg-blend-multiply text-white grid grid-cols-1 lg:grid-cols-[90%] xl:grid-cols-[80%] 2xl:grid-cols-[60%] justify-center items-center text-center"
                // style={{ backgroundImage: 'url("/home_library.jpg")' }}
            >
                <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 grid gap-7 py-[10vh]">
                    <h1 className=" text-3xl md:text-4xl font-bold">
                        Contact Me
                    </h1>
                    <p className=" text-lg/7">
                        Welcome to{" "}
                        <span className=" bg-indigo-600 logo_name logo">
                            NOVELEDGE
                        </span>
                        ! Whether you're looking for a specific book, reporting
                        an issue, or have ideas to improve the library, your
                        feedback is always appreciated. Fill out the form below
                        — every message helps keep this collection growing and
                        accessible for all novel lovers.
                    </p>
                </div>
            </div>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 grid grid-cols-1 md:grid-cols-[80%] lg:grid-cols-[50%] justify-center py-[7vh] lg:py-[10vh] gap-12 lg:gap-0">
                <div className=" order-1 w-full flex items-center">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        action="dialog"
                        className=" w-full grid grid-cols-1 justify-center shadow-xl px-8 py-8 md:px-10 md:py-10 rounded-xl border gap-5"
                    >
                        <div>
                            <label className=" text-sm font-semibold">
                                Full name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Full name"
                                className=" w-full h-10 outline-none px-4 bg-transparent border rounded-md text-sm border-gray-500"
                                {...register("name", {
                                    required: "Full name is required",
                                })}
                            />
                            {errors.name && (
                                <p className="text-sm text-red-600">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className=" text-sm font-semibold">
                                Email Id
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className=" w-full h-10 outline-none px-4 bg-transparent border rounded-md text-sm border-gray-500"
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
                        <div>
                            <label className=" text-sm font-semibold">
                                Message
                            </label>
                            <textarea
                                className="textarea w-full outline-none px-4 py-3 bg-transparent border rounded-md text-sm border-gray-500"
                                style={{ outline: "none" }}
                                rows={6}
                                placeholder="Message"
                                {...register("message", {
                                    required: "Message is required",
                                })}
                            ></textarea>
                            {errors.message && (
                                <p className="text-sm text-red-600">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="btn border-none justify-self-start bg-black hover:bg-indigo-600 px-5 py-5"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContactPage;
