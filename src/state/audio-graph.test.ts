import "./web-audio.stub";
import { oscillator1Node } from "./audio-graph";
import { describe, expect, it } from "vitest";

describe("Audio Graph", () => {
	it("should create oscillator1Node", () => {
		expect(oscillator1Node).toBeDefined();
	});
});
