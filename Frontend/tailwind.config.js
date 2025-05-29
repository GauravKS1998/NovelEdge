/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            backgroundImage: {
                "contact-intro": 'url("/back.jpg")',
            },
        },
    },
    plugins: [require("daisyui")],
};
