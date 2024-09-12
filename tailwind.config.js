/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				headerBg: "#FDEDEC", // Soft Blush
				primary: "#333333", // Charcoal
				secondary: "#8FD3B0", // Seafoam Green
				navlinks: "#FFFFF0", // Ivory
				secondaryBtn: "#8B5E3C", // Chestnut Brown
				adsBar: "#3B9C9C", // Teal Blue
				adsLogo: "#8A8A8A", // Pewter
				catBorder: "#D3D3D3", // Pewter
				disabledText: "#A9A9A9", // Pewter
				darkFooter: "#3B302A", // Espresso
			},
		},
	},
	plugins: [],
};
