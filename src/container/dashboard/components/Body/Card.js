import classes from "./Card.module.css";
import { Chart } from "react-google-charts";
import { data } from "./Area-chart";
import { options } from "./Area-chart";

const Card = ({ topData }) => {
  return (
    <div className={classes.card}>
      <h5>{topData.title}</h5>
      <div className={classes.cart} >
        <div>
      <h2>{topData.number}</h2>
      <p>{topData.quantity}</p>
      </div>
      <Chart className={classes.chart}
        chartType="AreaChart"
        width="55%"
        height="90px"
        data={data}
        options={options}
      />
      </div>
    </div>
  );
};

export default Card;
