import "./knob.css";

export interface KnobProps {
	steps?: string[];
	stepStart?: number;
	onChange?: (value: number) => void;
}
export const Knob = (props: KnobProps) => (
	<div class="knob">
		<div class="value-pointer"></div>
	</div>
);
