import { initialState, Ms20State } from "./ms-20.state";

export function serializeSettings(state: Ms20State): string {
	return JSON.stringify(stateToSettings(state));
},

export function stateToSettings(state: Ms20State): Ms20Settings {
	return ;
}

export function settingsToState(settings: Ms20Settings, state: Ms20State): void {
  state.currentSetting = settings;
}

