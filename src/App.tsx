import { useMultistepForm } from "./hooks/useMultistepForm";
import UserForm from "./components/UserForm";
import AddressForm from "./components/AddressForm";
import AccountForm from "./components/AccountForm";

function App() {
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([<UserForm />, <AddressForm />, <AccountForm />]);

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
