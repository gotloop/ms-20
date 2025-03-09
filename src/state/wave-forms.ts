interface PeriodicWaveParams {
	real: Float32Array;
	imag: Float32Array;
}
/**
 * Generates a variable duty cycle rectangle wave.
 * The width of the pulse is configurable
 * @param pulseWidth from 0 to 1
 */
export function createRectangleWave(
	pulseWidth: number,
	harmonics = 64,
): PeriodicWaveParams {
	// avoir 0 or 1 values so that there is always sound
	let dutyCycle = 0.01 + Math.min(Math.max(pulseWidth, 0)) * 0.98;
	let real = new Float32Array(harmonics);
	let imag = new Float32Array(harmonics);
	// DC offset (first value) is 0
	real[0] = 0;
	imag[0] = 0;
	for (let n = 1; n < harmonics; n++) {
		let theta = Math.PI * dutyCycle * n;
		real[n] = 0; // No cosine components for asymmetric wave
		imag[n] = (2 / (Math.PI * n)) * Math.sin(theta); // Sine coefficients
	}

	return { real, imag };
}

/**
 * Generates a fixed-with rectangle wave
 */
export function createPulseWave(): PeriodicWaveParams {
	return createRectangleWave(0.25);
}
