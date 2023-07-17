import classes from "./Middlepie.module.css";
import CardWrapperComp from "../../../common/CardWrapper";
import { Label, Pie, PieChart,Cell } from "recharts";
import { data } from "./Area-chart";

const COLORS = ['#0088FE', 'lightgrey', 'lightgrey', 'lightgrey','lightgrey'];


const Middlepie = () => {
  return (
    <CardWrapperComp ht="420px" wt="30%">
        <p className={classes.middlepiep}>Chapter wise status</p>
        <PieChart  height={300} width={350}>
        <Pie
          data={[
            {
              name: "Finished Training",
              students: 22,
            },
            {
              name: "Chapter A",
              students: 20,
            },
            {
              name: "Chapter B",
              students: 7,
            },
            {
              name: "Chapter C",
              students: 22,
            },
            {
              name: "Haven't Started Yet",
              students: 34,
            },
          ]}
          innerRadius={50}
          outerRadius={100}
          dataKey="students"
          fill="grey"
          >
 {
           data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
         }
            <Label width={30} position="center" fontSize="15px" color='#333333'  >{`Finished Training`} </Label>
          </Pie>
        </PieChart>
        <div>
        <ul style={{display:'flex' ,color:'black', textAlign: 'left' , justifyContent: 'space-evenly'}}>
            <div>
            <li>Finished Training</li>
            <li>Chapter B</li>
            <li>Haven't Started Yet</li>
            </div>
            <div>
            <li>Chapter A</li>
            <li>Chapter C</li>
            </div>
        </ul>
        </div>
    </CardWrapperComp>
  );
};

export default Middlepie;
