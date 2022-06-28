import { CablePanel } from "./components/cable-panel";
import { Keyboard } from "./components/keyboard";
import { KnobsPanel } from "./containers/knobs-panel";
import "./app.css";

export function App() {
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    debugger;
  };
  return (
    <>
      <main aria-label="synthesizer">
        <h1>KORG MS-20</h1>
        <form
          name="ms-20"
          class="main-layout"
          onSubmit={handleSubmit}
          method="post"
        >
          <div class="top-panel">
            <KnobsPanel></KnobsPanel>
            <CablePanel></CablePanel>
          </div>
          <div class="keyboard">
            <div class="separation-bar"></div>
            <Keyboard></Keyboard>
          </div>
        </form>
      </main>
      <footer role="contentinfo" aria-label="Footer">
        &copy; {new Date().getFullYear()} made with &hearts; by{" "}
        <a href="https://github.com/benjilegnard"> benjilegnard</a>
      </footer>
    </>
  );
}
