import React from "react";
import { useAuth } from "../Context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem("Users");
            toast.success("Logout Successfully");
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (error) {
            toast.error(error);
            setTimeout(() => {}, 2000);
        }
    };

    return (
        <div>
            {/* <button
                className=" px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer border-none"
                onClick={handleLogout}
            >
                Logout
            </button> */}
            <div className="dropdown dropdown-end">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar border-none"
                >
                    <div className="w-10 rounded-full outline-none">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://cdn-icons-png.flaticon.com/128/2021/2021646.png"
                        />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow bg-white dark:bg-[#1D232A] dark:text-white hover:text-indigo-600 font-500"
                >
                    <li>
                        <a onClick={handleLogout}>Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Logout;
