import { Knob } from "./knob";

export interface SelectKnobProps {
	id: string;
	label: string;
	value: string;
	options: string[];
}

export const SelectKnob = (props: SelectKnobProps) => (
	<div class="select-knob">
		<Knob></Knob>
		<label for={props.id}></label>
		<select name={props.id}>
			{props.options.map((option, index) => (
				<option key={index}>{option}</option>
			))}
		</select>
	</div>
);
