import { Panel } from "../components/panel"
import { useCallback, useEffect, useRef } from "preact/hooks";
import { analyzerBuffer1, analyzerBuffer2, analyzerNode1, analyzerNode2 } from "../state/audio-graph";

// const backgroundColor = "#11111b";
const redColor = "#f38ba8";
const blueColor = "#89b4fa";

export const VisualizerPanel = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const drawLine = (drawContext: CanvasRenderingContext2D, buffer: Uint8Array, color: string) => {
		if (!canvasRef.current) return;
		drawContext.strokeStyle = color;

		drawContext.beginPath();
		const sliceWidth = (canvasRef.current.width * 1.0) / buffer.length;
		let x = 0;

		for (let i = 0; i < buffer.length; i++) {
			const v = buffer[i] / 128.0;
			const y = (v * canvasRef.current.height) / 2;

			if (i === 0) {
				drawContext.moveTo(x, y);
			} else {
				drawContext.lineTo(x, y);
			}

			x += sliceWidth;
		}

		drawContext.lineTo(canvasRef.current.width, canvasRef.current.height / 2);
		drawContext.stroke();
	};

	const draw = useCallback((drawContext: CanvasRenderingContext2D) => {
		analyzerNode1.getByteTimeDomainData(analyzerBuffer1);
		analyzerNode2.getByteTimeDomainData(analyzerBuffer2);
		if (!canvasRef.current) return;
		drawContext.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
		// drawContext.fillStyle = backgroundColor;
		// drawContext.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
		drawLine(drawContext, analyzerBuffer1, redColor);
		drawLine(drawContext, analyzerBuffer2, blueColor);

	}, [canvasRef.current]);

	useEffect(() => {
		let animationFrameId: number;
		const drawContext = canvasRef.current?.getContext("2d");

		const render = () => {
			if (!drawContext) return;
			draw(drawContext);
			animationFrameId = window.requestAnimationFrame(render);
		}
		render();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
		}
	}, [draw]);

	return (<Panel title="Visualizer" areaName="viz">
		<canvas ref={canvasRef} width="230" height="100"></canvas>
	</Panel>);
}
