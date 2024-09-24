import "./HomeContainer.css";
import Poster from "../../components/Poster/Poster";
import BMICalculator from "../../components/BMICalculator/BMICalculator";

const HomeContainer = () => {
  return (
    <section className="home_container">
      <div className="home_content">
        <Poster />
        <BMICalculator />
      </div>
    </section>
  );
};

export default HomeContainer;
