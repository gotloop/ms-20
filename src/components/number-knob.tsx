import { useRef } from "preact/hooks";
import { Knob } from "./knob";

/**
	* Input props
	*/
export interface NumberKnobProps {
	id: string;
	label: string;
	min: number;
	max: number;
	value: number;
	onChange: (value?: number) => void;
}

const NumberKnobStyles: JSX.CSSProperties = {
	display: "block",
}

/** 
	* Number knob component is a rotative potentiometer mapped to an input type="range"
	*/
export const NumberKnob = (props: NumberKnobProps) => {

	const input = useRef(null);

	const onValueChange = (value: any) => {
		props.onChange(value);
	};

	return (
		<div style={NumberKnobStyles}>
			<Knob onChange={onValueChange}></Knob>
			<label id={`${props.id}-label`} for={props.id}>
				{props.label}
			</label>
			<input
				type="range"
				ref={input}
				id={props.id}
				name={props.id}
				min={props.min}
				value={props.value}
				onChange={(event) => props.onChange(/* todo: value */)}
			></input>
		</div>
	);
};
