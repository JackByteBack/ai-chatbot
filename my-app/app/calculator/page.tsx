"use client";

import { useState } from 'react';

export default function CalculatorPage() {
  const [display, setDisplay] = useState<string>('0');
  const [firstNum, setFirstNum] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);
  const [dotUsed, setDotUsed] = useState(false);

  const appendNumber = (digit: string) => {
    if (waitingForSecond) {
      setDisplay(digit);
      setWaitingForSecond(false);
    } else {
      setDisplay((prev) => (prev === '0' ? digit : prev + digit));
    }
  };

  const handleDot = () => {
    if (!dotUsed) {
      appendNumber('.');
      setDotUsed(true);
    }
  };

  const chooseOperator = (op: string) => {
    const inputValue = parseFloat(display);
    if (firstNum === null) {
      setFirstNum(inputValue);
    } else if (operator) {
      const result = operate(firstNum, inputValue, operator);
      setFirstNum(result);
      setDisplay(String(result));
    }
    setOperator(op);
    setWaitingForSecond(true);
    setDotUsed(false);
  };

  const computeResult = () => {
    if (operator && firstNum !== null) {
      const secondNum = parseFloat(display);
      const result = operate(firstNum, secondNum, operator);
      setDisplay(String(result));
      setFirstNum(null);
      setOperator(null);
      setWaitingForSecond(false);
      setDotUsed(false);
    }
  };

  const clearAll = () => {
    setDisplay('0');
    setFirstNum(null);
    setOperator(null);
    setWaitingForSecond(false);
    setDotUsed(false);
  };

  const operate = (a: number, b: number, op: string): number => {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '×':
        return a * b;
      case '÷':
        return b === 0 ? NaN : a / b;
      default:
        return b;
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button className="button-clear" onClick={clearAll}>AC</button>
        <button onClick={() => chooseOperator('÷')} className="button-operator">÷</button>

        <button onClick={() => appendNumber('7')}>7</button>
        <button onClick={() => appendNumber('8')}>8</button>
        <button onClick={() => appendNumber('9')}>9</button>
        <button onClick={() => chooseOperator('×')} className="button-operator">×</button>

        <button onClick={() => appendNumber('4')}>4</button>
        <button onClick={() => appendNumber('5')}>5</button>
        <button onClick={() => appendNumber('6')}>6</button>
        <button onClick={() => chooseOperator('-')} className="button-operator">-</button>

        <button onClick={() => appendNumber('1')}>1</button>
        <button onClick={() => appendNumber('2')}>2</button>
        <button onClick={() => appendNumber('3')}>3</button>
        <button onClick={() => chooseOperator('+')} className="button-operator">+</button>

        <button onClick={() => appendNumber('0')} style={{ gridColumn: 'span 2' }}>0</button>
        <button onClick={handleDot}>.</button>
        <button className="button-equal" onClick={computeResult}>=</button>
      </div>
    </div>
  );
}
