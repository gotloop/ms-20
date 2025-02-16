import { NumberKnob } from "../components/number-knob";

export const Oscillator1Panel = () => <>
	{/* todo: select knob for waveForm */}
	<NumberKnob
		id="osc1-pulse-width"
		label=" Form"
		min={0}
		max={100}
		value={0}
		onChange={(value) => console.log(value)}
	></NumberKnob>
	{/* todo select knob for scale */}
</>;
