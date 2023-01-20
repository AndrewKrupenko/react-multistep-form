import { useMultistepForm } from "./hooks/useMultistepForm";

function App() {
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([<div>One</div>, <div>Two</div>, <div>Three</div>]);

  return (
    <div className="App">
      <form>
        <div className="form-header">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="form-controls">
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="button" onClick={next}>
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
