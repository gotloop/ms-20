import { css, Styles } from "../styled-system/css";
import { Keyboard } from "./components/keyboard";
import { CutoffFrequencyModulation1Panel } from "./containers/cutoff-frequency-modulation-1.panel";
import { CutoffFrequencyModulation2Panel } from "./containers/cutoff-frequency-modulation-2.panel";
import { EnvelopeGenerator1Panel } from "./containers/envelope-generator-1.panel";
import { EnvelopeGenerator2Panel } from "./containers/envelope-generator-2.panel";
import { ExternalSignalPanel } from "./containers/external-signal.panel";
import { FrequencyModulationPanel } from "./containers/frequency-modulation.panel";
import { HighPassFilterPanel } from "./containers/high-pass-filter.panel";
import { LowPassFilterPanel } from "./containers/low-pass-filter.panel";
import { MasterTunePanel } from "./containers/master-tune.panel";
import { MasterVolumePanel } from "./containers/master-volume.panel";
import { ModulationGeneratorPanel } from "./containers/modulation-generator.panel";
import { OscillatorMixerPanel } from "./containers/oscillator-mixer.panel";
import { Oscillator1Panel } from "./containers/oscillator1.panel";
import { Oscillator2Panel } from "./containers/oscillator2.panel";
import { PatchPanel } from "./containers/patch.panel";
import { PortamentoPanel } from "./containers/portamento.panel";
import { VisualizerPanel } from "./containers/visualizer.panel";
import { Bar } from "./interface/bar";

const MainLayoutStyles: Styles = {
	maxWidth: "1024px",
	background: "#333",
	height: "720px",
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
const PanelStyles: Styles = {
	display: "flex",
	flexDirection: "row",
	flex: "1 1 auto",
	padding: "5px",
}
const LeftPanelStyles: Styles = {
	flex: "1 1 auto",
	display: "grid",
	gridTemplateColumns: "repeat(8, 1fr)",
	gridColumnGap: "1px",
	gridTemplateRows: "35% 20% 20% 25%",
	gridRowGap: "1px",
	gridTemplateAreas: `
 "osc1 osc2 mix hpf  lpf  viz viz eg2"
 "osc1 osc2 mix hpf  lpf  mg  eg1 eg2"
 "osc1 osc2 fm  cfm1 cfm2 mg  eg1 eg2"
 "port mt   fm  cfm1 cfm2 mg  eg1 eg2"
 `,
}
const RightPanelStyles: Styles = {
	display: "flex",
	flexDirection: "column",
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
		<div class={css(PanelStyles)}>
			<div class={css(LeftPanelStyles)}>
				<Oscillator1Panel />
				<Oscillator2Panel />
				<OscillatorMixerPanel />
				<PortamentoPanel />
				<MasterTunePanel />
				<HighPassFilterPanel />
				<LowPassFilterPanel />
				<EnvelopeGenerator1Panel />
				<EnvelopeGenerator2Panel />
				<ModulationGeneratorPanel />
				<FrequencyModulationPanel />
				<CutoffFrequencyModulation1Panel />
				<CutoffFrequencyModulation2Panel />
				<VisualizerPanel />
			</div>
			<div class={css(RightPanelStyles)}>
				{/*
				<PatchPanel />
				<ExternalSignalPanel />
			  */}
			</div>
		</div>
		<div class={css(KeyboardStyles)}>
			<Bar />
			<Keyboard />
		</div>
	</form>

	)
};
