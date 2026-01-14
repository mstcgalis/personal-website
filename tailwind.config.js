/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./content/**/*.{html,njk,js,md}",
		"./_includes/**/*.{html,njk,js}",
	],
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
			colors: {
				cookbook: {
					pink: "#e9cce0",
					yellow: "#feeda0",
					red: "#d02e2b",
					blue: "#446caf",
					burgundy: "#8e2725",
					orange: "#d9642c",
					sky: "#b7d3e1",
					brown: "#592436",
				},
			},
		},
	},
	plugins: [],
};
