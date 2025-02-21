import { css, Styles } from "../../styled-system/css"

const TitleStyles: Styles = {
	fontSize: "9rem",
	fontWeight: "bold",
	color: "rgba(255, 255, 255, 10%)",
	position: "absolute",
	userSelect: "none",
	zIndex: 0,
	overflow: "hidden",
	fontFamily: "system-ui",
	writingMode: "vertical-lr",
	left: "-50px",
	wordBreak: "unset",
	wordWrap: "unset",
	margin: 0,
	padding: 0,
	top: 0,
}

export const Title = () => <h1 className={css(TitleStyles)}>
	KORG MS-20
</h1>
