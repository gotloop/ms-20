import { state } from "../state/state";

import { css, Styles } from '../../styled-system/css';

const defaultStyle: Styles = {
	fontSize: "1rem",
	lineHeight: "1rem",
	position: "relative",
	overflow: "hidden",
	border: "0",
	padding: "10px 2px",
	borderRadius: "4px",
	height: "200px",
	width: "30px",
	flex: "0 0 auto",
	writingMode: "vertical-lr",
	textAlign: "right",
	transition: "background-color ease-in-out 0.3s",
};

const blackKeyStyle: Styles = {
	backgroundColor: "#2f2f2f",
	color: "rgba(255, 255, 255, 80%)",
	height: "120px",
	marginLeft: "-10px",
	marginRight: "-10px",
	width: "20px",
	zIndex: "2",
	boxShadow: "inset 2px 2px 4px rgba(255, 255, 255, 25%),inset -2px -2px 4px rgba(0, 0, 0, 100%), 0 0 5px rgba(0, 0, 0, 45%)",
	"&:hover,&:focus": {
		backgroundColor: "#1a1a1a",
	}
};

const whiteKeyStyle: Styles = {
	backgroundColor: "rgb(255, 235, 209)",
	color: "rgba(0, 0, 0, 85%)",
	marginRight: "2px",
	boxShadow: "inset 2px 2px 4px white, inset -2px -2px 4px rgba(0, 0, 0, 15%)",
	"&:hover,&:focus": {
		backgroundColor: "rgb(255, 240, 221)",
	}
}

export interface KeyProps {
	color: "white" | "black";
	note: string;
	freq: number;
}

export const Key = (props: KeyProps) => {
	const handleMouseDown = () => {
		state.currentNote.value = props.freq;
		state.isPlaying.value = true;
	};
	const handleMouseUp = () => {
		state.isPlaying.value = false;
	}
	return (
		<button
			class={css(defaultStyle, props.color === "black" ? blackKeyStyle : whiteKeyStyle)}
			name="key"
			type="button"
			value={props.freq}
			title={props.note}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
		>
			{props.note}
		</button>
	);
};
