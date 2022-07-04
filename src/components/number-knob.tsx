import { Knob } from "./knob";
import "./number-knob.css";
/**
 *
 */
export interface NumberKnobProps {
	id: string;
	label: string;
	min: number;
	max: number;
	value: number;
	onChange: (value?: number) => void;
}

export const NumberKnob = (props: NumberKnobProps) => {
	const onValueChange = (value: any) => {
		// todo do som
		console.log(value);
	};
	return (
		<div class="volume-knob">
			<Knob onChange={onValueChange}></Knob>
			<label id={`${props.id}-label`} for={props.id}>
				{props.label}
			</label>
			<input
				type="range"
				id={props.id}
				name={props.id}
				min={props.min}
				value={props.value}
				onChange={(event) => props.onChange()}
			></input>
		</div>
	);
};
