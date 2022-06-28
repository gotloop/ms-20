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
  hpf: {
    fc: number;
    peak: number;
  };
  /** low pass filter */
  lpf: {
    fc: number;
    peak: number;
  };
}

/** Main state of the app. */
export interface Ms20State {
  volume: number;
  currentNote?: string;
  isPlaying: boolean;
  currentSetting?: Ms20Setting;
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
  volume: 100,
  isPlaying: false,
  currentSetting: initialSetting(),
};
