import Middlebar from "./Middlebar";
import Middlepie from "./Middlepie";
import Topbody from "./Topbody";
import classes from "./Body.module.css";
import Bottomleft from "./Bottomleft";
import Bottommiddle from "./Bottommiddle";
import Bottomright from "./Bottomright";

const Body = () => {
  return (
    <div className={classes.bodyContent}>
      <Topbody />
      <div className={classes.middle}>
        <Middlepie />
        <Middlebar />
      </div>
      <div className={classes.middle}>
        <Bottomleft />
        <Bottommiddle />
        <Bottomright />
      </div>
    </div>
  );
};

export default Body;
