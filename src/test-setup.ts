import { vi } from "vitest";

const mockConnect = vi.fn();
const mockcreateMediaElementSource = vi.fn(() => {
	return {
		connect: mockConnect,
	};
});
const mockgetByteFrequencyData = vi.fn();
const mockcreateAnalyser = vi.fn(() => {
	return {
		connect: mockConnect,
		frequencyBinCount: [0, 1, 2],
		getByteFrequencyData: mockgetByteFrequencyData,
	};
});
const mockcreateOscillator = vi.fn(() => {
	return {
		channelCount: 2,
	};
});
const mockChannelSplitterConnect = vi.fn((n) => n);
const mockcreateChannelSplitter = vi.fn(() => {
	return {
		connect: mockChannelSplitterConnect,
	};
});
export const mockaudioContext = vi.fn(() => {
	return {
		createAnalyser: mockcreateAnalyser,
		createMediaElementSource: mockcreateMediaElementSource,
		createOscillator: mockcreateOscillator,
		createChannelSplitter: mockcreateChannelSplitter,
	};
});
