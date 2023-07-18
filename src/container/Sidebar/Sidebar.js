import { useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import logo from "./../../assets/svg/Logo.svg";
import classes from "./Sidebar.module.css";

const sidebar_menu = ['Dashboard','Trainings','Users','Analytics','My account','Support']
const Sidebar = () => {
  const [viewDashboard, setViewDashboard] = useState(0);

  const dashboardHandler = (num) => {
    setViewDashboard(num);
  };

  return (
    <div className={classes.dashboard}>
      <div className={classes.sidebar}>
        <div className={classes.logo}>
            <img src={logo} />
        </div>
        <div className={classes.sidebar_menu}>
            {sidebar_menu.map((item,index)=>
                <div onClick={()=>dashboardHandler(index)} style={{backgroundColor:`${index===viewDashboard?'#0D62FF':''}`}} key={index} className={classes.item}>
                    <span style={{color:`${index===viewDashboard?'#FFFFFF':'#000000'}`}} className={classes.text}>{item}</span>
                </div>
            )}
        </div>
        
      </div>
      <div className={classes.content}>
        {viewDashboard===0 && <Dashboard />}
      </div>
    </div>
  );
};

export default Sidebar;
