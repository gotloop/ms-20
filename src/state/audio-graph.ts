export const FFT_SIZE = 2048;

export const audioContext = new AudioContext();

export const oscillator1Node = audioContext.createOscillator();

export const oscillator2Node = audioContext.createOscillator();

export const oscillator1GainNode = audioContext.createGain();

export const oscillator2GainNode = audioContext.createGain();

export const analyzerNode1 = audioContext.createAnalyser();
analyzerNode1.fftSize = FFT_SIZE;

export const analyzerBuffer1 = new Uint8Array(analyzerNode1.frequencyBinCount);

export const analyzerNode2 = audioContext.createAnalyser();
analyzerNode2.fftSize = FFT_SIZE;

export const analyzerBuffer2 = new Uint8Array(analyzerNode2.frequencyBinCount);

export const masterVolumeNode = audioContext.createGain();

export const output = audioContext.destination;

// CONNECT ALL THE THINGS

oscillator1Node.connect(oscillator1GainNode);

oscillator2Node.connect(oscillator2GainNode);

oscillator1GainNode.connect(masterVolumeNode);

oscillator2GainNode.connect(masterVolumeNode);

oscillator1GainNode.connect(analyzerNode1);

oscillator2GainNode.connect(analyzerNode2);

masterVolumeNode.connect(output);

oscillator1Node.start();

oscillator2Node.start();

// avoid auto-play
if (audioContext.state === "running") {
	audioContext.suspend();
}
