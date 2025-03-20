import { NumberKnob } from "../components/number-knob";
import { Panel } from "../components/panel";
import { state } from "../state/state";

export const EnvelopeGenerator1Panel = () => {
	const { delayTime, attackTime, releaseTime } = state.currentSetting.envelopeGenerator1;
	return (<Panel title="Envelope Generator 1" areaName="eg1">
		<NumberKnob id="eg1-delay-time" label="Delay"
			min={0}
			max={10}
			value={delayTime.value}
			step={0.1}
			onChange={(value) => delayTime.value = value}
		/>
		<NumberKnob id="eg1-attack-time" label="Attack"
			min={0}
			max={10}
			value={attackTime.value}
			step={0.1}
			onChange={(value) => attackTime.value = value}
		/>
		<NumberKnob id="eg1-release-time" label="Release"
			min={0}
			max={10}
			value={releaseTime.value}
			step={0.1}
			onChange={(value) => releaseTime.value = value} />
	</Panel>)
};
