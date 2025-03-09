// TODO: separate context instanciation from module exports
// (add a creation method)
interface Nodes {
	context: AudioContext;
	osc1: {
		oscillator: OscillatorNode;
		gain: GainNode;
	};
}

export const audioContext = new AudioContext();

export const oscillator1Node = audioContext.createOscillator();

export const oscillator2Node = audioContext.createOscillator();

export const oscillator1GainNode = audioContext.createGain();

export const oscillator2GainNode = audioContext.createGain();

export const masterVolumeNode = audioContext.createGain();

export const output = audioContext.destination;

oscillator1Node.connect(oscillator1GainNode);

oscillator2Node.connect(oscillator2GainNode);

oscillator1GainNode.connect(masterVolumeNode);

oscillator2GainNode.connect(masterVolumeNode);

masterVolumeNode.connect(output);

oscillator1Node.start();

oscillator2Node.start();

// avoid auto-play
if (audioContext.state === "running") {
	audioContext.suspend();
}
