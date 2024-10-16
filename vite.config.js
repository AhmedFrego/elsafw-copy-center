import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [remix()],
	resolve: {
		alias: {
			components: "/app/components",
			layouts: "/app/layouts",
			assets: "/app/assets",
		},
	},
});
