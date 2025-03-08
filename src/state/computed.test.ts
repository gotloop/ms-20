import { describe, beforeEach, it, expect } from "vitest";
import { ScaleValue, state } from "./state";
import { oscillator1Frequency } from "./computed";
describe("computed state", () => {
	describe("oscillator frequency one", () => {
		describe("should depend on currentFrequency and scale", () => {
			beforeEach(() => {
				// set note to A440
				state.currentNote.value = 440;
			});
			it.each([
				[2, 440],
				[4, 220],
				[8, 110],
				[16, 55],
				[32, 27.5],
			])(
				"with a scale of %i, it should set oscillator frequency to %i",
				(scale: number, frequency: number) => {
					state.currentSetting.oscillator1.scale.value = scale as ScaleValue;
					expect(oscillator1Frequency.value).toBe(frequency);
				},
			);
		});
	});
});
