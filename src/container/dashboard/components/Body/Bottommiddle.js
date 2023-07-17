import DonutChart from "react-donut-chart";
import classes from "./Bottommiddle.module.css";
import CardWrapperComp from "../../../common/CardWrapper";

const Bottommiddle = () => {
  return (
    <CardWrapperComp ht="340px" wt="30%">
      <p className={classes.heading}>Quiz Passing %</p>
      <div>
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
        height={430}
        width={365}
      />
      </div>
    </CardWrapperComp>
  );
};

export default Bottommiddle;
