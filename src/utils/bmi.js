export default function bmi(weight, height) {
  const result = (weight / ((height / 100) * (height / 100))).toFixed(2);

  switch (true) {
    case result < 18.5:
      return [result, "Underweight"];

    case result >= 30:
      return [result, "Obese"];

    case result >= 25:
      return [result, "Overweight"];

    case result >= 18.5:
      return [result, "Normal"];

    default:
      return [result, "Error"];
  }
}
