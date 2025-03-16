import { NumberKnob } from "../components/number-knob";
import { state } from "../state/state";

export const PortamentoPanel = () => {
	const { portamento } = state.currentSetting;
	return (
		<div class="knobs-panel">
			<NumberKnob
				id="portamento"
				label="Portamento"
				min={0}
				max={100}
				value={portamento.value}
				onChange={(value) => portamento.value = value}
			></NumberKnob>
		</div>
	)
};
