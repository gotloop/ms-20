import { BehaviorSubject } from "rxjs";
import { Scale } from "tone";

export type WaveForm = "triangle" | "sine" | "square";
export type ScaleValue = 8 | 16 | 32;
export interface Ms20State {
  volume: number;
  currentNote?: string;
  isPlaying: false;
  portamento: number;
  masterTune: number;
  vco1?: {
    waveForm: WaveForm;
    pw: number;
    scale: Scale;
  };
  vco2?: {
    waveForm: WaveForm;
    pitch: number;
    scale: Scale;
  };
  vcoMixer: {
    vco1: number;
    vco2: number;
  },
  highPassFilter: {
    fc: number;
    peak: number;
  }
}

export const initialState: Ms20State = {
  volume: 100,
  isPlaying: false,
  portamento: 0,
  masterTune: 0,
  vco1: {},
};

const state$ = new BehaviorSubject<Ms20State>(initialState);
