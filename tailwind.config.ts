import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontSize: {},
			fontFamily: {
				sans: ['"cairo"'],
			},
		},
	},
	plugins: [],
} satisfies Config;
