import { createStore, select, withProps } from "@ngneat/elf";
import { Observable } from "rxjs";
import { initialState, Ms20State } from "./ms-20.state";

export const store = createStore(
  { name: "ms-20" },
  withProps<Ms20State>(initialState)
);

export function changeVolume(volume: number) {
  store.update((state) => ({ ...state, volume }));
}

export function playNote(note: string) {
  store.update((state) => ({ ...state, currentNote: note, isPlaying: true }));
}

export const selectVolume$: Observable<number> = store.pipe(
  select((state) => state.volume)
);
