import { vi } from "vitest";

class StubAudioParam {
	public value?: number;
}
class StubAudioContext implements Partial<AudioContext> {
	createOscillator(): OscillatorNode {
		return {
			connect: vi.fn(),
			start: vi.fn(),
			frequency: new StubAudioParam(),
			detune: new StubAudioParam(),
		} as unknown as OscillatorNode;
	}
	createGain(): GainNode {
		return {
			gain: new StubAudioParam(),
			connect: vi.fn(),
		} as unknown as GainNode;
	}
	suspend = vi.fn();
}

vi.stubGlobal("AudioContext", StubAudioContext);
