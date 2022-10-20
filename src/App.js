import { useState } from "react";

function App() {
  let [calc, setCalc] = useState("");
  let [result, setResult] = useState("");

  let ops = ["*", "/", "+", "-", "."];

  let updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  let createDigits = () => {
    let digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };

  let calculate = () => {
    setCalc(eval(calc).toString());
  };

  let deleteLast = () => {
    if (calc === "") {
      return;
    }

    let value = calc.slice(0, -1);

    setCalc(value);
  };


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {calc || "0"}
          
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button data-delete  onClick={deleteLast}> 
            C
          </button>
		  
			
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button className="dot" onClick={() => updateCalc(".")}>.</button>

		<button onClick={calculate}> = </button>

        </div>
      </div>
    </div>
  );
}

export default App;
