import { NumberKnob } from "../components/number-knob";

import "./knobs-panel.css";

export const KnobsPanel = () => (
  <div class="knobs-panel">
    <NumberKnob
      id="portamento"
      label="Portamento"
      min={0}
      max={100}
      value={0}
      onChange={(value) => console.log(value)}
    ></NumberKnob>
  </div>
);
