import { useState } from "react";

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState("0");
  const [firstValue, setFirstValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForSecond) {
      setDisplay(digit);
      setWaitingForSecond(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clearDisplay = () => {
    setDisplay("0");
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecond(false);
  };

  const performOperation = (op: string) => {
    const inputValue = parseFloat(display);
    if (operator && firstValue !== null && !waitingForSecond) {
      const result = calculate(firstValue, inputValue, operator);
      setDisplay(String(result));
      setFirstValue(result);
    } else {
      setFirstValue(inputValue);
    }
    setOperator(op);
    setWaitingForSecond(true);
  };

  const calculate = (
    a: number,
    b: number,
    op: string
  ): number => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b === 0 ? 0 : a / b;
      default:
        return b;
    }
  };

  const calculateResult = () => {
    if (operator && firstValue !== null) {
      const result = calculate(
        firstValue,
        parseFloat(display),
        operator
      );
      setDisplay(String(result));
      setFirstValue(null);
      setOperator(null);
      setWaitingForSecond(false);
    }
  };

  return (
    <div id="calculator">
      <div id="display">{display}</div>
      <div className="buttons">
        <button className="clear" onClick={clearDisplay}>C</button>
        <button onClick={() => inputDecimal()}>.</button>
        <button onClick={() => performOperation("/")}>/</button>
        <button onClick={() => performOperation("*")}>*</button>

        <button onClick={() => inputDigit("7")}>7</button>
        <button onClick={() => inputDigit("8")}>8</button>
        <button onClick={() => inputDigit("9")}>9</button>
        <button onClick={() => performOperation("-")}>-</button>

        <button onClick={() => inputDigit("4")}>4</button>
        <button onClick={() => inputDigit("5")}>5</button>
        <button onClick={() => inputDigit("6")}>6</button>
        <button onClick={() => performOperation("+")}>+</button>

        <button onClick={() => inputDigit("1")}>1</button>
        <button onClick={() => inputDigit("2")}>2</button>
        <button onClick={() => inputDigit("3")}>3</button>
        <button className="equal" onClick={calculateResult}>=</button>

        <button className="clear" onClick={clearDisplay} style={{ gridColumn: "span 2" }}>0</button>
      </div>
    </div>
  );
};

export default Calculator;
