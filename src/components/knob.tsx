import { css, Styles } from "../../styled-system/css";

export interface KnobProps {
	steps?: string[];
	stepStart?: number;
	onChange?: (value: number) => void;
}

const KnobStyles: Styles = {
	display: "block",
	width: "50px",
	height: "50px",
	borderRadius: "50px",
	boxShadow: "inset 2px 2px 25px rgba(255, 255, 255, 25%), inset -2px -2px 25px rgba(0, 0, 0, 100%), 0 0 5px rgba(0, 0, 0, 45%)",
	margin: "15px",
}

export const Knob = (props: KnobProps) => (
	<div class={css(KnobStyles)}>
		<div class="value-pointer"></div>
	</div>
);
