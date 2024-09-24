const BMIForm = ({ weight, setWeight, height, setHeight }) => {
  return (
    <form className="bmi_form">
      <div className="input_box">
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          placeholder="75 kgs"
          id="weight"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </div>
      <div className="input_box">
        <label htmlFor="height">Height</label>
        <input
          type="number"
          placeholder="172 cms"
          id="height"
          name="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
      </div>
    </form>
  );
};

export default BMIForm;
