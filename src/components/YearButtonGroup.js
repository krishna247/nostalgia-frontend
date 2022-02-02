import {ToggleButton,ToggleButtonGroup} from "@mui/material";
import {Fragment, useState} from "react";
import './YearButtonGroup.css'

const YearButtonGroup = (props) => {
    const years = [...Array(15).keys()].map( num => num+2008)
    // const [yearVal, setYearVal] = useState(() => [2021,2022]);
    const [yearVal,setYearVal] = [props.yearsVal,props.setYearsVal]

    const handleFormat = (event, newYear) => {
        setYearVal(newYear);
    };

    return (
        <Fragment>
        <br/><br/>
    <ToggleButtonGroup
        color="primary"
        value={yearVal}
        onChange={handleFormat}
    >
        {years.map( year => <ToggleButton value={year}>{year} </ToggleButton>)}
        {/*<ToggleButton value="web">Web</ToggleButton>*/}
        {/*<ToggleButton value="android">Android</ToggleButton>*/}
        {/*<ToggleButton value="ios">iOS</ToggleButton>*/}
    </ToggleButtonGroup></Fragment>)
}

export default YearButtonGroup