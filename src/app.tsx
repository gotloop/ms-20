import "./state/effects";

import { Title } from "./components/title";
import { Body } from "./body";
import { Footer } from "./components/footer";
//
// TODO useContext for global state
export function App() {
	return (
		<>
			<main aria-label="synthesizer">
				<Title />
				<Body />
			</main>
			<Footer />
		</>
	);
}
