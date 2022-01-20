import {useState} from "react";
import {Box, Slider} from "@mui/material";

const marks = [
    {value: 2008,label: '2009'},
    {value: 2009,label: '2008'},
    {value: 2010,label: '2010'},
    {value: 2011,label: '2011'},
    {value: 2012,label: '2012'},
    {value: 2013,label: '2013'},
    {value: 2014,label: '2014'},
    {value: 2015,label: '2015'},
    {value: 2016,label: '2016'},
    {value: 2017,label: '2017'},
    {value: 2018,label: '2018'},
    {value: 2019,label: '2019'},
    {value: 2020,label: '2020'},
    {value: 2021,label: '2021'},
    {value: 2022,label: '2022'}];


const YearSlider = (props) => {
    // const [value, setValue] = useState([2021, 2022]);

    const handleChange = (event, newValue) => {
        props.setYearsVal(newValue);
    };
    return(
        <Box sx={{ width: 950, marginLeft:10, marginTop: 4 }}>
            <Slider
                // getAriaLabel={() => 'Temperature range'}
                // getAriaLabel = {(val) => val}
                // defaultValue = {[2021,2022]}
                value={props.yearsVal}
                onChange={handleChange}
                // valueLabelDisplay="on"
                marks = {marks}
                step={1}
                // getAriaValueText={valuetext}
                min ={2008}
                max ={2022}
                // color="secondary"
            />
            {[props.yearsVal[0],props.yearsVal[1]]}
        </Box>
    )
}

export default YearSlider