import DonutChart from "react-donut-chart";
import classes from "./Bottommiddle.module.css";

const Bottommiddle = () => {
  return (
    <div className={classes.bottommiddle}>
      <p>Quiz Passing %</p>
      <DonutChart
        data={[
          {
            label: "Passed",
            value: 1423,
          },
          {
            label: "Failed",
            value: 134,
          },
        ]}
        colors={['#018E42','#ed1c24']}
        innerRadius={0.4}
        outerRadius={0.7}
        height={400}
        width={400}
      />
    </div>
  );
};

export default Bottommiddle;
