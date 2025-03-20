import { css, Styles } from "../../styled-system/css"

const BarStyles: Styles = {
	zIndex: 3,
	position: "absolute",
	right: "0",
	left: "0",
	height: "10px",
	backgroundColor: "#222",
	boxShadow: "0 0 5px black",
}

/** Separator bar */
export const Bar = () => <div className={css(BarStyles)}></div>
