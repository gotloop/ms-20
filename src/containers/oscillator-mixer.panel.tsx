import { NumberKnob } from "../components/number-knob";
import { state } from "../state/state";

export const OscillatorMixerPanel = () => {
	const { volume1, volume2 } = state.currentSetting.oscillatorsMixer;
	return <>
		<NumberKnob
			id="volume-osc-1"
			label="vol 1"
			min={0}
			max={100}
			value={volume1.value}
			onChange={(value) => volume1.value = value}
		/>
		<NumberKnob
			id="volume-osc-2"
			label="vol 2"
			min={0}
			max={100}
			value={volume2.value}
			onChange={(value) => volume2.value = value}
		/>
	</>;
}
