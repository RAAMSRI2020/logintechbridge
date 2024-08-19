/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                whitesmoke: 'F5f5f5',
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            screens: {
                xs: "480px",
                ss: "620px",
                sm: "768px",
                md: "1060px",
                lg: "1400px", // Custom breakpoint
                xl: "1700px",
            },
        },
    },
    plugins: [],
}