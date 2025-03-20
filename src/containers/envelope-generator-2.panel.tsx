import { NumberKnob } from "../components/number-knob";
import { Panel } from "../components/panel"
import { state } from "../state/state";

export const EnvelopeGenerator2Panel = () => {

	const { holdTime, attackTime, decayTime, sustainLevel, releaseTime } = state.currentSetting.envelopeGenerator2;
	return (
		<Panel title="Envelope Generator 2" areaName="eg2">
			<NumberKnob id="eg2-hold-time" label="Hold"
				min={0}
				max={10}
				value={holdTime.value}
				step={0.1}
				onChange={(value) => holdTime.value = value}
			/>
			<NumberKnob id="eg2-attack-time" label="Attack"
				min={0}
				max={10}
				value={attackTime.value}
				step={0.1}
				onChange={(value) => attackTime.value = value}
			/>
			<NumberKnob id="eg2-decay-time" label="Decay"
				min={0}
				max={10}
				value={decayTime.value}
				step={0.1}
				onChange={(value) => decayTime.value = value}

			/>
			<NumberKnob id="eg2-sustain-level" label="Sustain"

				min={0}
				max={10}
				value={sustainLevel.value}
				step={0.1}
				onChange={(value) => sustainLevel.value = value}
			/>
			<NumberKnob id="eg2-release-time" label="Release"

				min={0}
				max={10}
				value={releaseTime.value}
				step={0.1}
				onChange={(value) => releaseTime.value = value}
			/>
		</Panel>
	)
};
