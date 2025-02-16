import { NumberKnob } from "../components/number-knob";

export const PortamentoPanel = () => (
	<div class="knobs-panel">
		<NumberKnob
			id="portamento"
			label="Portamento"
			min={0}
			max={100}
			value={0}
			onChange={(value) => console.log(value)}
		></NumberKnob>
	</div>
);
