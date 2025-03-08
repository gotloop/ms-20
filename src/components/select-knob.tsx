import { Knob } from "./knob";

export interface SelectKnobProps<T> {
	id: string;
	label: string;
	value?: T;
	options: SelectOption<T>[];
	onChange: (value: T) => void;
}

export interface SelectOption<T> {
	label: string;
	value: T;
}
export const SelectKnob = (props: SelectKnobProps<string | number | undefined>) => {
	const { id, label, options, onChange } = props;
	return (
		<div class="select-knob">
			{/*		<Knob></Knob> */}
			<label for={id}>{label}</label>
			<select id={id} onChange={(event) => {
				onChange(event.currentTarget.value);
			}}>
				{options.map((option, index) => (
					<option
						key={index}
						value={option.value}>{option.label}</option>
				))}
			</select>
		</div>
	)
};
