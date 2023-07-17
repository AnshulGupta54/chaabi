import { Progress } from 'rsuite';
import classes from './Bottomright.module.css';
import "rsuite/dist/rsuite.min.css";
import CardWrapperComp from '../../../common/CardWrapper';

const data=[30,35,40,30,25,50,70,80,45,60];


const Bottomright=()=>{
    return (
        <CardWrapperComp ht="340px" wt="44%">
        {/* <div className={classes.bottomright}> */}
        <div className={classes.heading}>
            <p>Daily Training Completions</p>
            <p>Last 7 Days</p>
            </div>
            <div style={{display:'flex'}}>
            <div>
                <ul className={classes.list}>
                    <li> 160 </li>
                    <li> 120 </li>
                    <li> 80 </li>
                    <li> 40 </li>
                    <li> 0 </li>

                </ul>
            </div>
            <div className={classes.graph}>
                {data.map((per)=>(
                     <Progress.Line percent={per} vertical={true} strokeColor="blue" showInfo={false} strokeWidth={16} />
                ))}

            </div>
            </div>
            <div className={classes.week}>
                <p style={{marginTop:'8px'}}>S</p>
                <p>M</p>
                <p>T</p>
                <p>W</p>
                <p>T</p>
                <p>F</p>
                <p>S</p>
                <p>M</p>
                <p>T</p>
                <p>W</p>


            </div>
        {/* </div> */}
        </CardWrapperComp>
    );
 }

 export default Bottomright; 