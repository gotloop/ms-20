import { NumberKnob } from "../components/number-knob";
import { Panel } from "../components/panel";
import { state } from "../state/state";

export const LowPassFilterPanel = () => {
	const { frequencyCutoff, peak } = state.currentSetting.lowPassFilter;
	return (<Panel title="Low Pass Filter" areaName="lpf">
		<NumberKnob
			id="low-pass-cutoff-frequency"
			label="Frequency"
			min={0}
			max={10}
			value={frequencyCutoff.value}
			step={0.01}
			onChange={(value) => frequencyCutoff.value = value}
		></NumberKnob>
		<NumberKnob
			id="low-pass-peak"
			label="Peak"
			min={0}
			max={10}
			value={peak.value}
			step={0.01}
			onChange={(value) => peak.value = value}
		></NumberKnob>
	</Panel>)
};

