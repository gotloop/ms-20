import { css, Styles } from "../styled-system/css";
import { Keyboard } from "./components/keyboard";
import { ExternalSignalPanel } from "./containers/external-signal.panel";
import { MasterVolumePanel } from "./containers/master-volume.panel";
import { OscillatorMixerPanel } from "./containers/oscillator-mixer.panel";
import { Oscillator1Panel } from "./containers/oscillator1.panel";
import { Oscillator2Panel } from "./containers/oscillator2.panel";
import { PatchPanel } from "./containers/patch.panel";
import { PortamentoPanel } from "./containers/portamento.panel";
import { Bar } from "./interface/bar";

const MainLayoutStyles: Styles = {
	maxWidth: "1024px",
	background: "#333",
	height: "640px",
	display: "flex",
	flexDirection: "column",
	margin: "0 auto",
	boxShadow: "0 0 30px rgba(0, 0, 0, 35%)",
	overflow: "hidden",
}

const KeyboardStyles: Styles = {
	flex: "0 0 auto",
	position: "relative",
}
const TopPanelStyles: Styles = {
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
		class={css(MainLayoutStyles)}
		onSubmit={handleSubmit}
		method="post"
	>
		<div class={css(TopPanelStyles)}>
			<Oscillator1Panel />
			<Oscillator2Panel />
			<OscillatorMixerPanel />
			<PortamentoPanel />
		</div>
		<div class="top-right">
			<PatchPanel />
			<ExternalSignalPanel />
		</div>
		<div class={css(KeyboardStyles)}>
			<Bar />
			<Keyboard />
		</div>
	</form>

	)
};
