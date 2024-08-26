/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dimWhite: "rgba(255, 255, 255, 0.7)",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                title: ["NeoGramTrial-Bold"],
                text: ["NeoGramTrial-Light"],
                paragraph: ["Montserrat-VariableFont"],

            },
            screens: {
                xs: "480px",
                ss: "620px",
                sm: "768px",
                md: "1060px",
                lg: "1200px",
                xl: "1700px",
            },
        },
    },
    plugins: [],
}