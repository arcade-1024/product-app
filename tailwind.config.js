// @type {import('tailwindcss').Config}
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			darkGray: {
				25: "#686868",
				50: "#585858",
				100: "#383838",
				200: "#363636",
				300: "#333333",
				400: "#2E2E2E",
				500: "#2C2C2C",
				600: "#272727",
				700: "#252525",
				800: "#232323",
				900: "#1E1E1E",
				1000: "#121212",
			},
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
				merriweather: ["'Merriweather Sans'", "sans-serif"],
				poppins: ["Poppins", " sans-serif"],
			},
		},
	},
	plugins: [],
};
