import { signal } from "@preact/signals";

import { state } from "./state/state";
import "./state/effects";

import { Title } from "./components/title";
import { Body } from "./body";
import { Footer } from "./components/footer";

const debugState = {
	enabled: signal(false),
	displayOverlay: signal(false),
}

export function App() {
	return (
		<>
			<main aria-label="synthesizer">
				<Title />
				<Body />
			</main>
			{
				debugState.enabled.value ?? <pre>{state.currentNote.value}</pre>
			}
			<Footer />
		</>
	);
}
