import { useRef } from "preact/hooks";
import { Knob } from "./knob";
import { css, Styles } from "../../styled-system/css";

/**
	* Input props
	*/
export interface NumberKnobProps {
	id: string;
	label: string;
	min: number;
	max: number;
	value: number;
	step?: number;
	onChange: (value: number) => void;
}

const NumberKnobStyles: Styles = {
	display: "block",
}

/** 
	* Number knob component is a rotative potentiometer mapped to an input type="range"
	*/
export const NumberKnob = (props: NumberKnobProps) => {

	const input = useRef(null);

	return (
		<div className={css(NumberKnobStyles)}>
			{/*			<Knob onChange={onValueChange}></Knob> */}
			<label id={`${props.id}-label`} for={props.id}>
				{props.label}
			</label>
			<input
				type="range"
				ref={input}
				id={props.id}
				name={props.id}
				min={props.min}
				max={props.max}
				step={props.step}
				value={props.value}
				onChange={(event) => props.onChange(parseFloat(event.currentTarget.value))}
			></input>
		</div>
	);
};
