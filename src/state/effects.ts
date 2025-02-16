import { computed, effect } from "@preact/signals";
import { state } from "./state";
import { audioContext, oscillator1Node, oscillator2Node } from "./audio-graph";

export const oscillator1Frequency = computed(
	() => state.currentNote.value /* add masterTune, osc1 scale */,
	// + state.currentSetting.oscillator1.scale.value || 0,
);

export const oscillator2Frequency = computed(
	() => state.currentNote.value /* add masterTune, osc2 scale */,
);

// link computed frequencies to oscillator nodes
effect(() => {
	oscillator1Node.frequency.value = oscillator1Frequency.value;
	oscillator2Node.frequency.value = oscillator2Frequency.value;
});

const firstTouchDone = false;
effect(() => {
	if (state.isPlaying.value && !firstTouchDone) {
		audioContext.resume();
	}
});
