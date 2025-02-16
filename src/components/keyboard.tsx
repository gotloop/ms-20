import { Key } from "./key";
import { Slider } from "./slider";
import "./keyboard.css";

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
// see https://en.wikipedia.org/wiki/Twelfth_root_of_two
const twelveRootOfTwo = Math.pow(2, 1 / 12);

const startingNote = 440 - 9 * twelveRootOfTwo;

interface KeyAndVal {
	color: "black" | "white";
	note: string;
	freq: number;
}
let previousFrequency = startingNote;
const keysAndVals: KeyAndVal[] = keys.map((keyName, index) => {
	const blackOrWhite = keyName.includes("/");
	const currentFrequency = previousFrequency * twelveRootOfTwo;
	previousFrequency = currentFrequency;
	return {
		color: blackOrWhite ? "black" : "white",
		note: keyName,
		freq: currentFrequency,
	};
});
/**
	* @see https://en.wikipedia.org/wiki/Piano_key_frequencies
	* @returns
	*/
export const Keyboard = () => (
	<div class="keyboard-container">
		<Slider></Slider>
		{Array.from(keysAndVals).map((key) => (
			<Key color={key.color} note={key.note} freq={key.freq}></Key>
		))}
	</div>
);
