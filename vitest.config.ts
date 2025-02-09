import preactPlugin from "@preact/preset-vite";
import { defineConfig } from "vitest/config";
import { readFileSync } from "node:fs";

export default defineConfig({
	plugins: [preactPlugin()],
	test: {
		environment: "jsdom",
		environmentOptions: {
			jsdom: {
				/* loads the full page in test env */
				html: readFileSync("index.html").toString(),
			},
		},
	},
});
