import React from "react";
import { useState } from "react";

function BMI2() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [age, setAge] = useState();
  const [message, setMesage] = useState();
  const [bmi, setBmi] = useState();

  const handleReset = () => {
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Enter Valid value");
    } else {
      const bmiFormula = (weight / (height * height)) * 703;
      setBmi(bmiFormula.toFixed(2));
    }
    if (bmi < 25) {
      setMesage("Your Under weight");
    } else if (bmi >= 25 || bmi <= 30) {
      setMesage("You are healthy");
    } else {
      setMesage("You need medical assistance");
    }
  };

  return (
    <div className="bg-slate-600 h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-2xl ">BMI Calculator</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Age
          </label>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            min={0}
            placeholder="Age"
            id="large-input"
            className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Weight
          </label>
          <input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight"
            type="number"
            min={0}
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Height
          </label>
          <input
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            type="number"
            min={0}
            placeholder="Height in cm"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex gap-7 mt-4">
          <button className=" h-7 w-32 bg-slate-400 rounded-2xl ">
            Calculate
          </button>
          <button
            className="h-7 w-32 bg-slate-400 rounded-2xl"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
      <div className="flexgap-2 flex-col">
        <span>Your BMI:{bmi}</span>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default BMI2;
