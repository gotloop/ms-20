import { css } from '../../styled-system/css';

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
		<div class={css({ display: "flex", flexDirection: "column", })}>
			{/*		<Knob></Knob> */}
			<label for={id} class={css({ fontSize: "1rem" })}
			>{label}</label>
			<br />
			<select
				id={id}
				class={css({ maxWidth: "100px", fontSize: "1rem" })}
				onChange={(event) => {
					onChange(event.currentTarget.value);
				}}>
				{options.map((option, index) => (
					<option
						key={index}
						value={option.value}
						class={css({ fontSize: "1rem" })}
					>{
							option.label
						}</option>
				))}
			</select>
		</div>
	)
};
