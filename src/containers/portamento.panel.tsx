import { NumberKnob } from "../components/number-knob";

export const PortamentoPanel = () => (
	<fieldset>
		<legend>Portamento</legend>
		<NumberKnob
			id="portamento"
			label="time"
			min={0}
			max={100}
			value={0}
			onChange={(value) => console.log(value)}
		></NumberKnob>
	</fieldset>
);
