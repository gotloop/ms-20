import { effect } from "@preact/signals";
import { state } from "./state";
import {
	audioContext,
	oscillator1Node,
	oscillator2Node,
	oscillator1GainNode,
	oscillator2GainNode,
	masterVolumeNode,
	highPassFilterNode,
	lowPassFilterNode,
	envelopeGenerator1GainNode,
	envelopeGenerator2GainNode,
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
	oscillator2Node.detune.value = state.currentSetting.oscillator2.pitch.value;
});

// --- volume mixer
effect(() => {
	oscillator1GainNode.gain.value =
		state.currentSetting.oscillatorsMixer.volume1.value;
});
effect(() => {
	oscillator2GainNode.gain.value =
		state.currentSetting.oscillatorsMixer.volume2.value;
});

// --- keyboard / playing state

const firstTouchDone = false;

effect(() => {
	if (state.isPlaying.value === true && !firstTouchDone) {
		audioContext.resume();
	}
	if (state.isPlaying.value === false) {
		// audioContext.suspend();
	}
});

// --- master volume

effect(() => {
	masterVolumeNode.gain.value = state.currentSetting.masterVolume.value;
});

// FILTERS
// these kinda work, but values might need adjustments

const MAX_CUTOFF_FREQUENCY = 100;
const MAX_PEAK_VALUE = 200; // max is 770, see https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/Q
// --- high pass filter
// frequencyCutoff value in Hz
effect(() => {
	// value from 0 to 10
	const { frequencyCutoff } = state.currentSetting.highPassFilter;
	highPassFilterNode.frequency.value =
		40 + frequencyCutoff.value * MAX_CUTOFF_FREQUENCY;
});
effect(() => {
	// value from 0 to 10
	const { peak } = state.currentSetting.highPassFilter;
	highPassFilterNode.Q.value = peak.value * MAX_PEAK_VALUE;
});

// --- low pass filter
effect(() => {
	const { frequencyCutoff } = state.currentSetting.lowPassFilter;
	lowPassFilterNode.frequency.value =
		10 + frequencyCutoff.value * MAX_CUTOFF_FREQUENCY;
});

effect(() => {
	// value from 0 to 10
	const { peak } = state.currentSetting.lowPassFilter;
	lowPassFilterNode.Q.value = peak.value * MAX_PEAK_VALUE;
});

// --- Envelope generators

// envelope generator 1
effect(() => {
	const { isPlaying } = state;
	const { attackTime, delayTime, releaseTime } =
		state.currentSetting.envelopeGenerator1;
	if (isPlaying.value) {
		envelopeGenerator1GainNode.gain.value = 0;
		envelopeGenerator1GainNode.gain.setValueAtTime(
			0,
			audioContext.currentTime + delayTime.value,
		);
		envelopeGenerator1GainNode.gain.linearRampToValueAtTime(
			1.0,
			audioContext.currentTime + delayTime.value + attackTime.value,
		);
	} else {
		envelopeGenerator1GainNode.gain.linearRampToValueAtTime(
			0,
			audioContext.currentTime + releaseTime.value,
		);
	}
});
// envelope generator 2
effect(() => {
	const { isPlaying } = state;
	const { attackTime, holdTime, decayTime, sustainLevel, releaseTime } =
		state.currentSetting.envelopeGenerator2;
	if (isPlaying.value) {
		// ramp up to attackTime
		envelopeGenerator2GainNode.gain.setValueAtTime(
			1.0,
			audioContext.currentTime + attackTime.value,
		);
		// decay to sustain level
		const realLevel = sustainLevel.value / 10;
		envelopeGenerator2GainNode.gain.linearRampToValueAtTime(
			realLevel,
			audioContext.currentTime + attackTime.value + decayTime.value,
		);
		// hold
		envelopeGenerator2GainNode.gain.linearRampToValueAtTime(
			realLevel,
			audioContext.currentTime +
				attackTime.value +
				decayTime.value +
				holdTime.value,
		);
	} else {
		// release
		envelopeGenerator1GainNode.gain.linearRampToValueAtTime(
			0,
			audioContext.currentTime + releaseTime.value,
		);
	}
});
