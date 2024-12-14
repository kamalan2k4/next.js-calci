"use client";
import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch {
      setResult("Error");
    }
  };

  const handleSpecialFunction = (func) => {
    try {
      const num = parseFloat(input) || 0;
      if (func === "sqrt") {
        setResult(Math.sqrt(num).toString());
      } else if (func === "square") {
        setResult((num ** 2).toString());
      }
    } catch {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="h-screen flex items-center justify-center  w-4/12">
    <div className="p-6 bg-gray-900 text-white w-full  max-w-md rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
      <div className="text-3xl font-bold text-center mb-4 text-teal-400">
        Calculator
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-inner mb-4">
        <div className="text-right text-lg font-mono mb-2">{input}</div>
        <div className="text-right text-2xl font-extrabold text-green-400">
          {result}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <button className="btn btn-accent" onClick={clearInput}>
          AC
        </button>
        <button
          className="btn btn-accent"
          onClick={() => handleSpecialFunction("sqrt")}
        >
          √
        </button>
        <button
          className="btn btn-accent"
          onClick={() => handleSpecialFunction("square")}
        >
          x²
        </button>
        <button className="btn btn-primary" onClick={() => handleClick("/")}>
          ÷
        </button>

        <button className="btn btn-light" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="btn btn-light" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="btn btn-light" onClick={() => handleClick("9")}>
          9
        </button>
        <button className="btn btn-primary" onClick={() => handleClick("*")}>
          ×
        </button>

        <button className="btn btn-light" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="btn btn-light" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="btn btn-light" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="btn btn-primary" onClick={() => handleClick("-")}>
          -
        </button>

        <button className="btn btn-light" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="btn btn-light" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="btn btn-light" onClick={() => handleClick("3")}>
          3
        </button>
        <button className="btn btn-primary" onClick={() => handleClick("+")}>
          +
        </button>

        <button
          className="btn btn-light col-span-2"
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button className="btn btn-light" onClick={() => handleClick(".")}>
          .
        </button>
        <button
          className="btn btn-primary col-span-1"
          onClick={calculateResult}
        >
          =
        </button>
      </div>
    </div>
    </div>
  );
}
