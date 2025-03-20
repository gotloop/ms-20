import { NumberKnob } from "../components/number-knob";
import { Panel } from "../components/panel";
import { state } from "../state/state";

export const HighPassFilterPanel = () => {
	const { frequencyCutoff, peak } = state.currentSetting.highPassFilter;
	return (<Panel title="High Pass Filter" areaName="hpf">
		<NumberKnob
			id="high-pass-cutoff-frequency"
			label="Frequency"
			min={0}
			max={10}
			value={frequencyCutoff.value}
			step={0.01}
			onChange={(value) => frequencyCutoff.value = value}
		></NumberKnob>
		<NumberKnob
			id="high-pass-peak"
			label="Peak"
			min={0}
			max={10}
			value={peak.value}
			step={0.01}
			onChange={(value) => peak.value = value}
		></NumberKnob>
	</Panel>);
}
