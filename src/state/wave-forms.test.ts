import { describe, expect, test } from "vitest";
import { createPulseWave, createRectangleWave } from "./wave-forms";

describe("Wave Form real and image factories", () => {
	test("createRectangleWave()", () => {
		const { real, imag } = createRectangleWave(0.5, 11);
		expect(real[0]).toEqual(0);
		expect(imag[0]).toEqual(0);
	});
	test("createPulseWave()", () => {
		const { real, imag } = createPulseWave();
		expect(real[0]).toEqual(0);
		expect(imag[0]).toEqual(0);
		console.log(real, imag);
	});
});
