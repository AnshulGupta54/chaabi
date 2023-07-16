import classes from "./Bottomleft.module.css";

const Bottomleft = () => {
  return (
    <div className={classes.bottomleft}>
      <h2>Monthly Training Activity</h2>
      <div className={classes.caption}>
      16% more enrollees this month
      </div>
      <div>
        <div>
          <input type="radio" /> <b>Course a</b>
          <p>23 workers took this course this week</p>
        </div>
        <div>
          <input type="radio" /> <b>Course b</b>
          <p>253 workers took this course this week</p>

        </div>
        <div>
          <input type="radio" /> <b>Course c</b>
          <p>253 workers took this course this week</p>

        </div>
        <div>
          <input type="radio" /> <b>Course d</b>
          <p>253 workers took this course this week</p>

        </div>
      </div>
    </div>
  );
};

export default Bottomleft;
