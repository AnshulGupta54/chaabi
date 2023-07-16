import { Progress } from 'rsuite';
import classes from './Middlebar.module.css';
import "rsuite/dist/rsuite.min.css";
import CardWrapperComp from '../../../common/CardWrapper';


const Middlebar=()=>{
    return (
        <CardWrapperComp ht="420px" wt="68%">
        {/* <div className={classes.middlebar}> */}
            <div className={classes.heading}>
            <p>Last 14 days Active Workers In Training</p>
            <p>Last 14 days</p>
            </div>
            <div style={{display:'flex'}}>
            <div>
                <ul className={classes.list}>
                    <li> 400 </li>
                    <li> 300 </li>
                    <li> 200 </li>
                    <li> 100 </li>
                    <li> 0 </li>

                </ul>
            </div>
            <div className={classes.bar}>
                <Progress.Line percent={30} vertical={true} strokeColor="blue" showInfo={false} strokeWidth={16}/>
                <Progress.Line percent={35} vertical={true} strokeColor="blue" showInfo={false} strokeWidth={16}/>
                <Progress.Line percent={35} vertical={true} strokeColor="blue" showInfo={false} strokeWidth={16}/>
                <Progress.Line percent={45} vertical={true} strokeColor="blue" showInfo={false} strokeWidth={16}/>
                <Progress.Line percent={50} vertical={true} strokeColor="blue" showInfo={false} strokeWidth={16}/>
                <Progress.Line percent={40} vertical={true} strokeColor="blue" showInfo={false} strokeWidth={16}/>
                <Progress.Line percent={45} vertical={true} strokeColor="blue" showInfo={false} strokeWidth={16}/>
                <Progress.Line percent={30} vertical={true} strokeColor="blue" showInfo={false} strokeWidth={16}/>
                <Progress.Line percent={50} vertical={true} strokeColor="blue" showInfo={false} strokeWidth={16}/>
                <Progress.Line percent={70} vertical={true} strokeColor="blue" showInfo={false} strokeWidth={16}/>
                <Progress.Line percent={80} vertical={true} strokeColor="blue" showInfo={false} strokeWidth={16}/>
                <Progress.Line percent={100} vertical={true} strokeColor="blue" showInfo={false} strokeWidth={16}/>
            </div>
            </div>
            <div className={classes.date}>
                <p style={{marginTop:'8px'}}>3 Jun</p>
                <p>4 Jun</p>
                <p>5 Jun</p>
                <p>6 Jun</p>
                <p>7 Jun</p>
                <p>8 Jun</p>
                <p>9 Jun</p>
                <p>10 Jun</p>
                <p>11 Jun</p>
                <p>12 Jun</p>
                <p>13 Jun</p>
                <p>14 Jun</p>

            </div>

        {/* </div> */}
        </CardWrapperComp>
    );
}

export default Middlebar;