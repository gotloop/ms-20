import { NumberKnob } from "../components/number-knob";
import { SelectKnob } from "../components/select-knob";
import { Oscillator2WaveForm, ScaleValue, state } from "../state/state";

export const Oscillator2Panel = () => {
	const { waveForm, pitch, scale } = state.currentSetting.oscillator2;
	return <>
		<SelectKnob
			id="osc2-waveform"
			label="Wave Form"
			options={[
				{ label: "sawtooth", value: "sawtooth" },
				{ label: "square", value: "square" },
				{ label: "pulse", value: "pulse" },
				{ label: "ring", value: "ring" },
			]}
			value={waveForm.value}
			onChange={(value) => {
				waveForm.value = value as Oscillator2WaveForm;
			}}
		/>
		<NumberKnob
			id="osc2-pitch"
			label="Pitch"
			min={-1}
			max={1}
			value={pitch.value}
			step={0.1}
			onChange={(value) => pitch.value = value}
		/>
		<SelectKnob
			id="osc2-scale"
			label="Scale"
			options={[
				{ label: "16'", value: 16 },
				{ label: " 8'", value: 8 },
				{ label: " 4'", value: 4 },
				{ label: " 2'", value: 2 },
			]}
			value={scale.value as ScaleValue}
			onChange={(value) => {
				scale.value = value as ScaleValue;
			}}
		/>
	</>
};
