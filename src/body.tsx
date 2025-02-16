import { CablePanel } from "./components/cable-panel";
import { Keyboard } from "./components/keyboard";
import { Oscillator1Panel } from "./containers/oscillator1.panel";
import { PortamentoPanel } from "./containers/portamento.panel";
import { Bar } from "./interface/bar";

const MainLayoutStyles: JSX.CSSProperties = {
	maxWidth: "1024px",
	background: "#333",
	height: "640px",
	display: "flex",
	flexDirection: "column",
	margin: "0 auto",
	boxShadow: "0 0 30px rgba(0, 0, 0, 35%)",
	overflow: "hidden",
}

const KeyboardStyles: JSX.CSSProperties = {
	flex: "0 0 auto",
	position: "relative",
}
const TopPanelStyles: JSX.CSSProperties = {
	flex: "1 1 auto"
}
/** Main body of the synthetizer */
export const Body = () => {
	const handleSubmit = (event: Event) => {
		event.preventDefault();
		event.stopImmediatePropagation();
	};
	return (<form
		name="ms-20"
		style={MainLayoutStyles}
		onSubmit={handleSubmit}
		method="post"
	>
		<div style={TopPanelStyles}>
			<Oscillator1Panel></Oscillator1Panel>
			<PortamentoPanel></PortamentoPanel>
			<CablePanel></CablePanel>
		</div>
		<div style={KeyboardStyles}>
			<Bar />
			<Keyboard></Keyboard>
		</div>
	</form>

	)
};
