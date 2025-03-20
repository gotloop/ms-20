import { FunctionComponent } from "preact";
import { NumberKnob } from "../components/number-knob";
import { state } from "../state/state";

export const MasterVolumePanel: FunctionComponent = () => {
	const { masterVolume } = state.currentSetting;
	return <>
		<NumberKnob
			id="master-volume"
			label="volume"
			min={0}
			max={100}
			value={masterVolume.value}
			onChange={(value) => masterVolume.value = value}
		/>
	</>
}
