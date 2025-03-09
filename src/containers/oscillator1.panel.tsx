import { NumberKnob } from "../components/number-knob";
import { SelectKnob } from "../components/select-knob";
import { Oscillator1WaveForm, ScaleValue, state } from "../state/state";

export const Oscillator1Panel = () => {

	const { waveForm, pulseWidth, scale } = state.currentSetting.oscillator1;
	return <>
		<SelectKnob
			id="osc1-wave-form"
			label="Wave Form"
			value={waveForm.value}
			options={[
				{ label: "triangle", value: "triangle" },
				{ label: "sawtooth", value: "sawtooth" },
				{ label: "rectangle", value: "rectangle" },
				{ label: "white noise", value: "whitenoise" },
			]}
			onChange={(formValue) => { waveForm.value = formValue as Oscillator1WaveForm; }}
		/>
		<NumberKnob
			id="osc1-pulse-width"
			label="Pulse width"
			min={0}
			max={1}
			value={pulseWidth.value}
			step={0.01}
			onChange={(value) => pulseWidth.value = value}
		></NumberKnob >
		<SelectKnob
			id="osc1-scale"
			label="Scale"
			value={scale.value as ScaleValue}
			options={[
				{ label: "32'", value: 32 },
				{ label: "16'", value: 16 },
				{ label: " 8'", value: 8 },
				{ label: " 4'", value: 4 },
			]}
			onChange={(formValue) => { scale.value = formValue as ScaleValue; }}
		/>
	</>
};
