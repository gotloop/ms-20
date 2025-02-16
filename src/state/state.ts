import { signal, Signal } from "@preact/signals";

/** values for oscillators */
export type WaveForm = "triangle" | "sine" | "square";

/** octave of the first vco */
export type ScaleValue = 2 | 4 | 8 | 16 | 32;

/**
 * Settings represent values of the knobs, and can be saved independently.
 */
export interface Ms20Setting {
	id: number;
	label?: string;
	portamento: number;
	masterTune: number;
	oscillator1: {
		waveForm: WaveForm;
		pulseWidth: number;
		scale: number;
	};
	oscillator2: {
		waveForm: WaveForm;
		pitch: number;
		scale: number;
	};
	oscillatorsMixer: {
		volume1: number;
		volume2: number;
	};
	/*
	highPassFilter: {
		frequencyCutoff: number;
		peak: number;
	};
	lowPassFilter: {
		frequencyCutoff: number;
		peak: number;
	};
	frequencyModulation: {};
	modulationGenerator: {};
	envelopeGenerator1: {
		delayTime: number;
		attackTime: number;
		releaseTime: number;
	};
	envelopeGenerator2: {
		holdTime: number;
		attackTime: number;
		decayTime: number;
		sustainLevel: number;
		releaseTime: number;
	};
	*/
}
// todo: setup recursive type
export type Ms20SettingsState = {
	id: Signal<number>;
	label: Signal<string | undefined>;
	masterTune: Signal<number>;
	oscillator1: {
		waveForm: Signal<WaveForm>;
		pulseWidth: Signal<number>;
		scale: Signal<number>;
	};
	oscillator2: {
		waveForm: Signal<WaveForm>;
		pitch: Signal<number>;
		scale: Signal<number>;
	};
	oscillatorsMixer: {
		volume1: Signal<number>;
		volume2: Signal<number>;
	};
};

/** Main state of the app. */
interface Ms20State {
	volume: Signal<number>;
	currentNote: Signal<number>;
	/** meaning: user is pressing a key, not the global sound playing */
	isPlaying: Signal<boolean>;
	currentSetting: Ms20SettingsState;
}

/** Factory defaults */
export const initialSetting = (): Ms20Setting => ({
	id: 0,
	masterTune: 50,
	portamento: 0,
	oscillator1: {
		waveForm: "triangle",
		pulseWidth: 0,
		scale: 0,
	},
	oscillator2: {
		waveForm: "triangle",
		pitch: 0,
		scale: 0,
	},
	oscillatorsMixer: {
		volume1: 100,
		volume2: 100,
	},
	/*
	highPassFilter: {
		frequencyCutoff: 0,
		peak: 0,
	},
	lowPassFilter: {
		frequencyCutoff: 0,
		peak: 0,
	},
	*/
});

export function createStateFromSettings(state: Ms20Setting): Ms20SettingsState {
	return {
		id: signal(state.id),
		label: signal(state.label),
		masterTune: signal(state.masterTune),
		oscillator1: {
			waveForm: signal(state.oscillator1.waveForm),
			pulseWidth: signal(state.oscillator1.pulseWidth),
			scale: signal(state.oscillator1.scale),
		},
		oscillator2: {
			waveForm: signal(state.oscillator2.waveForm),
			pitch: signal(state.oscillator2.pitch),
			scale: signal(state.oscillator2.scale),
		},
		oscillatorsMixer: {
			volume1: signal(state.oscillatorsMixer.volume1),
			volume2: signal(state.oscillatorsMixer.volume2),
		},
	};
}

/** initial state of the MS-20 */
export const state: Ms20State = {
	volume: signal(60),
	isPlaying: signal(false),
	currentNote: signal(440),
	currentSetting: createStateFromSettings(initialSetting()),
	// later, add settings[] here.
};
