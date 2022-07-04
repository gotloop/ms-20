import { Knob } from "./knob";
import "./select-knog.css";

export interface SelectKnobProps {
	id: string;
	label: string;
	value: string;
	options: string[];
	startAngle: number;
}

export const SelectKnob = ({ options, id }: SelectKnobProps) => (
	<div class="select-knob">
		<Knob></Knob>
		<label for={id}></label>
		<select name={id}>
			{options.map((option, index) => (
				<option>{option}</option>
			))}
		</select>
	</div>
);
