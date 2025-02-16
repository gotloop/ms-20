import { state } from "../state/state";
import "./key.css";

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
			class={["key", `key-${props.color}`].join(" ")}
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
