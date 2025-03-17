import { effect } from "@preact/signals";
import { state } from "./state";
import {
	audioContext,
	oscillator1Node,
	oscillator2Node,
	oscillator1GainNode,
	oscillator2GainNode,
	masterVolumeNode,
} from "./audio-graph";
import { oscillator1Frequency, oscillator2Frequency } from "./computed";
import { createPulseWave, createRectangleWave } from "./wave-forms";

// --- oscillators
// link computed frequencies to oscillator nodes
effect(() => {
	oscillator1Node.frequency.value = oscillator1Frequency.value;
});

effect(() => {
	oscillator2Node.frequency.value = oscillator2Frequency.value;
});

effect(() => {
	const waveFormValue = state.currentSetting.oscillator1.waveForm.value;
	const pulseWidthValue = state.currentSetting.oscillator1.pulseWidth.value;
	switch (waveFormValue) {
		case "triangle":
			oscillator1Node.type = "triangle";
			break;
		case "sawtooth":
			oscillator1Node.type = "sawtooth";
			break;
		case "rectangle":
			const { real, imag } = createRectangleWave(pulseWidthValue);
			oscillator1Node.setPeriodicWave(
				audioContext.createPeriodicWave(real, imag, {
					disableNormalization: false,
				}),
			);
			break;
		case "whitenoise":
			oscillator1Node.type = "custom";
			break;
	}
});

effect(() => {
	const waveFormValue = state.currentSetting.oscillator2.waveForm.value;
	switch (waveFormValue) {
		case "sawtooth":
			oscillator1Node.type = "sawtooth";
			break;
		case "square":
			oscillator2Node.type = "square";
			break;
		case "pulse":
			const { real, imag } = createPulseWave();
			oscillator2Node.setPeriodicWave(
				audioContext.createPeriodicWave(real, imag, {
					disableNormalization: true,
				}),
			);
			break;
		case "ring":
			// TODO
			oscillator2Node.type = "sine";
			break;
		default:
			console.log("never");
	}
});

effect(() => {
	// get octave below and above frequencies
	const detunedLimitMin = state.currentNote.value / 2;
	const detunedLimitMax = state.currentNote.value * 2;
	// values goes from -1 to 1 in the form, bring it to range 0-1;
	const pitchValue = (state.currentSetting.oscillator2.pitch.value + 1) / 2;

	const frequencyOffset =
		detunedLimitMin + (detunedLimitMax - detunedLimitMin) * pitchValue;
	oscillator2Node.detune.value = frequencyOffset * 100; // in cents
});

// --- volume mixer
effect(() => {
	oscillator1GainNode.gain.value =
		state.currentSetting.oscillatorsMixer.volume1.value / 100;
});

effect(() => {
	oscillator2GainNode.gain.value =
		state.currentSetting.oscillatorsMixer.volume2.value / 100;
});

// --- keyboard / playing state

const firstTouchDone = false;

effect(() => {
	if (state.isPlaying.value === true && !firstTouchDone) {
		audioContext.resume();
	}
	if (state.isPlaying.value === false) {
		audioContext.suspend();
	}
});

// --- master volume

effect(() => {
	masterVolumeNode.gain.value = state.currentSetting.masterVolume.value / 100;
});
