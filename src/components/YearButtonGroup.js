import {ToggleButton,ToggleButtonGroup} from "@mui/material";
import {Fragment, useState} from "react";
import './YearButtonGroup.css'

const YearButtonGroup = ({yearsVal,setYearsVal}) => {
    const years = [...Array(14).keys()].map( num => num+2009)
    // const [yearVal, setYearVal] = useState(() => [2021,2022]);
    // const [yearVal,setYearVal] = [props.yearsVal,props.setYearsVal]

    const handleFormat = (event, newYear) => {
        console.log(event)
        console.log("Year changed: "+newYear + newYear.length)
        setYearsVal(newYear);
    };

    return (
        <Fragment>
        <br/><br/>
    <ToggleButtonGroup
        style = {{flexWrap: "wrap" , margin: "auto",justifyContent: "center",alignItems: "center",display:"flex"}}
        color="primary"
        value={yearsVal}
        variant={"contained"}
        onChange={handleFormat}
    >
        {years.map( year => <ToggleButton value={year} key={year}>{year} </ToggleButton>)}
        {/*<ToggleButton value="web">Web</ToggleButton>*/}
        {/*<ToggleButton value="android">Android</ToggleButton>*/}
        {/*<ToggleButton value="ios">iOS</ToggleButton>*/}
    </ToggleButtonGroup></Fragment>)
}

export default YearButtonGroup