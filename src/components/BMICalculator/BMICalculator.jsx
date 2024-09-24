import { useState, useEffect } from "react";
import bmi from "../../utils/bmi";
import "./BMICalculator.css";
import BMIForm from "./Form/BMIForm";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState(["0", "Result"]);

  useEffect(() => {
    if (weight && height) setBmiResult(bmi(weight, height));
    else setBmiResult(["0", "Result"]);
  }, [weight, height]);

  return (
    <article className="bmi_calculator">
      <BMIForm
        weight={weight}
        setWeight={setWeight}
        height={height}
        setHeight={setHeight}
      />
      <h1 className="bmiResult">
        {bmiResult[0]} <span className="bmiResultSpan">BMI</span>
      </h1>

      <h1 className="bmiResultText">{bmiResult[1]}</h1>
    </article>
  );
};

export default BMICalculator;
