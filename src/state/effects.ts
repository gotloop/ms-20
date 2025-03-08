import { computed, effect } from "@preact/signals";
import { state } from "./state";
import { audioContext, oscillator1Node, oscillator2Node } from "./audio-graph";
import { oscillator1Frequency, oscillator2Frequency } from "./computed";

// link computed frequencies to oscillator nodes
effect(() => {
	oscillator1Node.frequency.value = oscillator1Frequency.value;
});

effect(() => {
	oscillator2Node.frequency.value = oscillator2Frequency.value;
});

effect(() => {
	oscillator2Node.detune.value = state.currentSetting.oscillator2.pitch.value;
});

const firstTouchDone = false;

effect(() => {
	if (state.isPlaying.value === true && !firstTouchDone) {
		audioContext.resume();
	}
	if (state.isPlaying.value === false) {
		audioContext.suspend();
	}
});
