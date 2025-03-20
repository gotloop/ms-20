import { FunctionalComponent } from "preact";
import { css } from "../../styled-system/css";

/**
	* Panel properties
	*/
interface PanelProps {
	/* if provided, a <legend> will be set */
	title?: string;
	/* gridArea name */
	areaName?: string;
}

/**
	* encapsulate childrens in a legend + fieldset grid area
		*/
export const Panel: FunctionalComponent<PanelProps> = (
	{ title, children, areaName }
) => (
	<fieldset class={css({
		padding: "5px",
		border: "1px solid white",
		borderRadius: "4px",
		margin: "5px"
	})} style={areaName ? `grid-area: ${areaName};` : ""}>
		{
			title && <legend class={css({
				color: "white",
				fontSize: ".8rem",
			})}>{title}</legend>
		}
		{children}
	</fieldset>
);

