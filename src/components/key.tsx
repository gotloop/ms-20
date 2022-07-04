import "./key.css";

export interface KeyProps {
	color: "white" | "black";
	note: string;
	freq: number;
}

export const Key = (props: KeyProps) => {
	const handleClick = () => {
		console.log(props);
	};
	return (
		<button
			class={["key", `key-${props.color}`].join(" ")}
			name="key"
			type="button"
			value={props.freq}
			title={props.note}
			onClick={handleClick}
		>
			{props.note}
		</button>
	);
};
