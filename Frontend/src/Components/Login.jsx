import React from "react";

function Login() {
    return (
        <>
            <div>
                <dialog id="login" className="modal text-white">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className="input_section">
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="input w-full"
                                style={{ outline: "none" }}
                            />
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="input w-full"
                                style={{ outline: "none" }}
                            />
                            <p className="text-sm text-gray-400 justify-self-end">
                                Not registered?{" "}
                                <a className="text-blue-500 cursor-pointer">
                                    Signup
                                </a>
                            </p>
                            <button className="btn justify-self-start px-6 py-5 bg-indigo-600">
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
