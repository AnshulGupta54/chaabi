import { useState } from 'react';
import Dashboard from '../dashboard/Dashboard';
import logo from './../../assets/svg/Logo.svg';
import classes from './Sidebar.module.css';

const Sidebar=()=>{
    const [viewDashboard,setViewDashboard]= useState(false);

    const dashboardHandler=()=>{
        setViewDashboard(true);
    }

    return (
        <div className={classes.dashboard}>
            <div className={classes.sidebar}>
            <img src={logo} />
            <p onClick={dashboardHandler} >Dashboard</p>
            {/* {viewDashboard && <Dashboard />} */}
            <p>Trainings</p>
            <p>Users</p>
            <p>Analytics</p>
            <p>My account</p>
            <p>Support</p>

            </div>
            {viewDashboard && <Dashboard/>}
        </div>
    );
}

export default Sidebar;