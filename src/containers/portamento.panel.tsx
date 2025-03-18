import { NumberKnob } from "../components/number-knob";
import { Panel } from "../components/panel";
import { state } from "../state/state";

export const PortamentoPanel = () => {
	const { portamento } = state.currentSetting;
	return (
		<Panel title="Portamento">
			<NumberKnob
				id="portamento"
				label="time"
				min={0}
				max={100}
				value={portamento.value}
				onChange={(value) => portamento.value = value}
			></NumberKnob>
		</Panel>
	)
};
