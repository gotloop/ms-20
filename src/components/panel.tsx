import { FunctionalComponent } from "preact";
import { css, Styles } from "../../styled-system/css";
interface PanelProps {
	title?: string;
	styles?: Styles;
}

export const Panel: FunctionalComponent<PanelProps> = (
	{ title, children, styles }
) => (
	<fieldset class={css({ borderRadius: "4px", ...styles })}>
		{
			title && <legend class={css({ color: "white" })}>{title}</legend>
		}
		{children}
	</fieldset>
);

