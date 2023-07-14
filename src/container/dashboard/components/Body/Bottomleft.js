import classes from "./Bottomleft.module.css";

const Bottomleft = () => {
  return (
    <div className={classes.bottomleft}>
      <p>Monthly Training Activity</p>
      <div>
        <div>
          <input type="radio" value="Male" name="gender" /> Course account
          <p>23 workers took this course this week</p>
        </div>
        <div>
          <input type="radio" value="Female" name="gender" /> Course b
        </div>
        <div>
          <input type="radio" value="Other" name="gender" /> Course c
        </div>
      </div>
    </div>
  );
};

export default Bottomleft;
