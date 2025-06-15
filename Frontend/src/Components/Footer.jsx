import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div>
                <hr />
                <footer className="footer footer-horizontal footer-center text-base-content rounded p-10 dark:text-white text-black">
                    <nav className="grid grid-flow-col gap-4">
                        <a
                            className="link link-hover hover:text-indigo-600 transition duration-300"
                            href="/"
                        >
                            Home
                        </a>
                        <a
                            className="link link-hover hover:text-indigo-600 transition duration-300"
                            href="/books"
                        >
                            Books
                        </a>
                        <a
                            className="link link-hover hover:text-indigo-600 transition duration-300"
                            href="/contact"
                        >
                            Contact
                        </a>
                    </nav>
                    <nav>
                        <div className="grid grid-flow-col gap-4">
                            <a className=" text-xl cursor-pointer hover:text-indigo-600 transition duration-300">
                                <FaXTwitter />
                            </a>
                            <a className=" text-xl cursor-pointer hover:text-indigo-600 transition duration-300">
                                <FaInstagram />
                            </a>
                            <a className=" text-xl cursor-pointer hover:text-indigo-600 transition duration-300">
                                <FaLinkedin />
                            </a>
                            <a className=" text-xl cursor-pointer hover:text-indigo-600 transition duration-300">
                                <FaGithub />
                            </a>
                        </div>
                    </nav>
                    <aside>
                        <p>
                            Copyright © {new Date().getFullYear()} - All right
                            reserved by Gaurav
                        </p>
                    </aside>
                </footer>
            </div>
        </>
    );
}

export default Footer;
