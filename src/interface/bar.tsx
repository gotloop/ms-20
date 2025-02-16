const BarStyles: JSX.CSSProperties = {
	zIndex: 3,
	position: "absolute",
	top: "-5px",
	right: "0",
	left: "0",
	height: "10px",
	backgroundColor: "#222",
	boxShadow: "0 0 5px black",
}

/** Separator bar */
export const Bar = () => <div style={BarStyles}></div>
