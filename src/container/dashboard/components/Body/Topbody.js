import classes from "./Topbody.module.css";
import Card from "./Card";



const top_data = [
  {
    title: "In training Workers",
    number: 3354,
    quantity: 234
  },
  {
    title: "Video Watch-Time(Hrs)",
    number: 2433,
    quantity: 435

  },
  {
    title: "% Workers Passing Quiz",
    number: 95,   
    quantity: 24

  },
  {
    title: "Avg. Days Token",
    number: 6,
    quantity: 3

  },
];

const Topbody = () => {
  return (
    <div className={classes.topbody}>
      {top_data.map((data) => (
        <Card topData={data} />
      ))}

    </div>
  );
};

export default Topbody;
