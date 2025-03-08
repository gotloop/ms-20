import { afterEach, describe, expect, it } from "vitest";
import "./state/web-audio.stub";
import { render } from "@testing-library/preact";
import { App } from "./app";
import axe from "axe-core";

describe("app", () => {
	afterEach(() => {
		// this is needed to avoid doubles in the dom
		document.body.innerHTML = "";
	});
	it("should render without error", () => {
		const { container } = render(<App />, {});
		expect(container).toBeDefined();
	});
	it("should be axe-essible", async () => {
		const { container } = render(<App />);
		const config = {
			rules: {
				"color-contrast": { enabled: false },
			},
		};
		const results = await axe.run(container.getRootNode(), config);
		for (const violation of results.violations) {
			console.error(violation.description, violation.helpUrl);
			for (const node of violation.nodes) {
				console.error(node.failureSummary, node.html);
			}
		}
		expect(results.violations).toHaveLength(0);
	});
});
