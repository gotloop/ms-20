import { describe, it, expect } from "vitest";
import "./web-audio.stub";
import { state } from "./state";
import "./effects";
import {
	masterVolumeNode,
	oscillator1GainNode,
	oscillator1Node,
	oscillator2GainNode,
} from "./audio-graph";

describe("effects", () => {
	describe("frequency", () => {
		it("should set value of webaudio oscillator 2", () => {
			state.currentNote.value = 440;
			state.currentSetting.oscillator1.scale.value = 32;

			expect(oscillator1Node.frequency.value).toBe(27.5);
		});
		it("should set value of webaudio oscillator 1", () => {
			state.currentNote.value = 440;
			state.currentSetting.oscillator1.scale.value = 32;

			expect(oscillator1Node.frequency.value).toBe(27.5);
		});
	});
	describe("volume mixer", () => {
		it("should set gain value of volume node 1 when signal value changes", () => {
			state.currentSetting.oscillatorsMixer.volume1.value = 75;

			expect(oscillator1GainNode.gain.value).toBe(75);
		});
		it("should set gain value of volume node 2 when signal value changes", () => {
			state.currentSetting.oscillatorsMixer.volume2.value = 75;

			expect(oscillator2GainNode.gain.value).toBe(75);
		});
	});
	describe("master volume", () => {
		it("should set master volume node gain", () => {
			state.currentSetting.masterVolume.value = 25;

			expect(masterVolumeNode.gain.value).toBe(25);
		});
	});
});
