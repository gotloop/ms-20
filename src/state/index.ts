import { BehaviorSubject } from "rxjs";

export interface Ms20State{
    volume: number;
    currentNote?: string;
    isPlaying: false;
    vco1?: {

    },
    vco2?: {
        
    }
}

export const initialState: Ms20State = {
    volume: 100,
    isPlaying: false,
}

const state$ = new BehaviorSubject<Ms20State>(initialState);