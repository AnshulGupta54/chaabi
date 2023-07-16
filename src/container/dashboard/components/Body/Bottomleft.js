  import CardWrapperComp from "../../../common/CardWrapper";
  import classes from "./Bottomleft.module.css";

  const data = [
    {
      input_label: "Course a",
      descr:"23 workers took this course this week"
    },
    {
      input_label: "Course b",
      descr:"23 workers took this course this week"
    },{
      input_label: "Course c",
      descr:"23 workers took this course this week"
    },{
      input_label: "Course d",
      descr:"23 workers took this course this week"
    },
  ];
  
  const Bottomleft = () => {
    return (
      <CardWrapperComp wt="23%" ht="340px">
      <div className={classes.bottomleft}>
        <h2 className={classes.title}>Monthly Training Activity</h2>
        <div className={classes.caption}>16% more enrollees this month
        </div>
        <div style={{marginTop:'15px'}}>
          {data.map((item,index)=>(
            <div style={{marginBottom:'8px'}}>
              <div style={{display:'flex',marginBottom:'4px'}}>
                <input type="radio"/>
                <b style={{fontSize:'0.8rem',marginLeft:'5px'}}>{item.input_label}</b>
              </div>
              <p style={{marginLeft:'1.2rem'}}>{item.descr}</p>
            </div>

          ))}
        </div>
      </div>
      </CardWrapperComp>
    );
  };

  export default Bottomleft;
