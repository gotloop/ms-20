import { computed } from "@preact/signals";
import { state } from "./state";

export const oscillator1Frequency = computed(
	() =>
		state.currentNote.value /
		(state.currentSetting.oscillator1.scale.value / 2),
);

export const oscillator2Frequency = computed(
	() =>
		state.currentNote.value /
		(state.currentSetting.oscillator2.scale.value / 2),
);
