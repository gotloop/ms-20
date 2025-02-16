export const audioContext = new AudioContext();

export const oscillator1Node = audioContext.createOscillator();

export const oscillator2Node = audioContext.createOscillator();

export const oscillator1GainNode = audioContext.createGain();

export const oscillator2GainNode = audioContext.createGain();

export const output = audioContext.destination;

oscillator1Node.connect(oscillator1GainNode);

oscillator2Node.connect(oscillator2GainNode);

oscillator2GainNode.connect(output);

oscillator2GainNode.connect(output);

oscillator1Node.start();
oscillator2Node.start();
