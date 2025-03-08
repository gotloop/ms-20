import { css, Styles } from "../../styled-system/css";
import { TWELFTH_ROOT_OF_TWO } from "../state/constants";
import { Key } from "./key";
import { Slider } from "./slider";

// 12 keys in an octave
const keysTemplate: string[] = [
	"C",
	"C♯/D♭",
	"D",
	"D♯/E♭",
	"E",
	"F",
	"F♯/G♭",
	"G",
	"G♯/A♭",
	"A",
	"A♯/B♭",
	"B",
];

// 3 times octaves
const keys = [
	...keysTemplate.map((note) => `${note}1`),
	...keysTemplate.map((note) => `${note}2`),
	...keysTemplate.map((note) => `${note}3`),
	...keysTemplate.map((note) => `${note}4`),
];

// A 440 to the closest C is 9 semitone
const startingNote = 440 - 9 * TWELFTH_ROOT_OF_TWO;

interface KeyAndVal {
	color: "black" | "white";
	note: string;
	freq: number;
}

let previousFrequency = startingNote;

const keysAndVals: KeyAndVal[] = keys.map((keyName) => {

	const blackOrWhite = keyName.includes("/");
	const currentFrequency = previousFrequency * TWELFTH_ROOT_OF_TWO;
	previousFrequency = currentFrequency;

	return {
		color: blackOrWhite ? "black" : "white",
		note: keyName,
		freq: currentFrequency,
	};
});

const KeyBoardContainerStyles: Styles = {
	paddingBottom: "5px",
	display: "flex",
	paddingLeft: "80px",
	flexDirection: "row",
}

/**
	* @see https://en.wikipedia.org/wiki/Piano_key_frequencies
	* @returns
	*/
export const Keyboard = () => (
	<div className={css(KeyBoardContainerStyles)}>
		<Slider></Slider>
		{Array.from(keysAndVals).map((key) => (
			<Key color={key.color} note={key.note} freq={key.freq}></Key>
		))}
	</div>
);
