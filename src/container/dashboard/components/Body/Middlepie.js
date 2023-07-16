import DonutChart from "react-donut-chart";
import classes from "./Middlepie.module.css";
import CardWrapperComp from "../../../common/CardWrapper";

const Middlepie = () => {
  return (
    <CardWrapperComp ht="420px" wt="30%">
      {/* <div className={classes.middlepie}> */}
        <p className={classes.middlepiep}>Chapter wise status</p>
        <DonutChart
          data={[
            {
              label: "Finished Training",
              value: 22,
            },
            {
              label: "Chapter A",
              value: 20,
            },
            {
              label: "Chapter B",
              value: 7,
            },
            {
              label: "Chapter C",
              value: 22,
            },
            {
              label: "Haven't Started Yet",
              value: 34,
            },
          ]}
          colors={["blue", "white", "white", "white", "white"]}
          innerRadius={0.3}
          outerRadius={0.7}
          height={400}
          width={400}
        />
      {/* </div> */}
    </CardWrapperComp>
  );
};

export default Middlepie;
