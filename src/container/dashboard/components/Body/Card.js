import classes from "./Card.module.css";
import { Chart } from "react-google-charts";
import { data } from "./Area-chart";
import { options } from "./Area-chart";
import CardWrapperComp from "../../../common/CardWrapper";

const Card = ({ topData }) => {
  return (
    <CardWrapperComp ht="150px" wt="24%">
      {/* <div className={classes.card}> */}
      <p className={classes.title}>{topData.title}</p>
      <div className={classes.cart}>
        <div className={classes.left}>
          <div>
            <h2>{topData.number}</h2>
          </div>
          <p>{topData.quantity}</p>
        </div>
        <Chart
          className={classes.chart}
          chartType="AreaChart"
          width="70%"
          height="90px"
          data={data}
          options={options}
        />
      </div>
      {/* </div> */}
    </CardWrapperComp>
  );
};

export default Card;
