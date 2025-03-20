export const FFT_SIZE = 2048;

export const audioContext = new AudioContext();

// Oscillators

export const oscillator1Node = audioContext.createOscillator();

export const oscillator2Node = audioContext.createOscillator();

export const oscillator1GainNode = audioContext.createGain();

export const oscillator2GainNode = audioContext.createGain();
// Generators gain nodes
export const envelopeGenerator1GainNode = audioContext.createGain();

export const envelopeGenerator2GainNode = audioContext.createGain();

// Filters

export const lowPassFilterNode = audioContext.createBiquadFilter();

lowPassFilterNode.type = "lowpass";

export const highPassFilterNode = audioContext.createBiquadFilter();

highPassFilterNode.type = "highpass";

// Analysers

export const analyzerNode1 = audioContext.createAnalyser();
analyzerNode1.fftSize = FFT_SIZE;

export const analyzerBuffer1 = new Uint8Array(analyzerNode1.frequencyBinCount);

export const analyzerNode2 = audioContext.createAnalyser();
analyzerNode2.fftSize = FFT_SIZE;

export const analyzerBuffer2 = new Uint8Array(analyzerNode2.frequencyBinCount);

// Outputs
export const masterVolumeNode = audioContext.createGain();

export const output = audioContext.destination;

// CONNECT ALL THE THINGS

oscillator1Node.connect(oscillator1GainNode);

oscillator2Node.connect(oscillator2GainNode);

oscillator1GainNode.connect(envelopeGenerator1GainNode);

oscillator2GainNode.connect(envelopeGenerator1GainNode);

envelopeGenerator1GainNode.connect(lowPassFilterNode);

lowPassFilterNode.connect(highPassFilterNode);

highPassFilterNode.connect(envelopeGenerator2GainNode);

oscillator1GainNode.connect(analyzerNode1);

oscillator2GainNode.connect(analyzerNode2);

envelopeGenerator2GainNode.connect(masterVolumeNode);

masterVolumeNode.connect(output);

oscillator1Node.start();

oscillator2Node.start();

// avoid auto-play
if (audioContext.state === "running") {
	audioContext.suspend();
}
