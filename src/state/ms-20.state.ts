import { signal, Signal } from "@preact/signals";

/** values for oscillators */
export type WaveForm = "triangle" | "sine" | "square";

/** octave of the first vco */
export type ScaleValue = 8 | 16 | 32;

/**
 * Settings represent values of the knobs, and can be saved independently.
 */
export interface Ms20Setting {
	id: number;
	label?: string;
	portamento: number;
	masterTune: number;
	/** first voltage control oscillator */
	vco1: {
		waveForm: WaveForm;
		pw: number;
		scale: number;
	};
	/** second voltage control oscillator */
	vco2: {
		waveForm: WaveForm;
		pitch: number;
		scale: number;
	};
	/** mixer */
	vcoMixer: {
		vco1: number;
		vco2: number;
	};
	/** high pass filter */
	highPassFilter: {
		/**cutoff frequency */
		fc: number;
		peak: number;
	};
	/** low pass filter */
	lowPassFilter: {
		/** cutoff frequency */
		fc: number;
		peak: number;
	};
	frequencyModulation: {},
	modulationGenerator: {},
	envelopeGenerator1: {
		delayTime: number;
		attackTime: number;
		releaseTime: number;
	},
	envelopeGenerator2: {
		holdTime: number;
		attackTime: number;
		decayTime: number;
		sustainLevel: number;
		releaseTime: number;
	},

}

/** Main state of the app. */
export interface Ms20State {
	volume: Signal<number>;
	currentNote?: Signal<string>;
	isPlaying: Signal<boolean>;
	currentSetting?: Signal<Ms20Setting>;
}

/** Factory defaults */
export const initialSetting = (): Ms20Setting => ({
	id: 0,
	masterTune: 50,
	portamento: 0,
	vco1: {
		waveForm: "triangle",
		pw: 0,
		scale: 0,
	},
	vco2: {
		waveForm: "triangle",
		pitch: 0,
		scale: 0,
	},
	vcoMixer: {
		vco1: 100,
		vco2: 100,
	},
	hpf: {
		fc: 0,
		peak: 0,
	},
	lpf: {
		fc: 0,
		peak: 0,
	},
});
/** initial state of the MS-20 */
export const initialState: Ms20State = {
	volume: signal(60),
	isPlaying: signal(false),
	currentSetting: signal(initialSetting()),
};

