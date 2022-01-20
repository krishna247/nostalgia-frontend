import {Box, css, Slider, SliderThumb, styled} from "@mui/material";
import {useState} from "react";
import './Slider.css'

const marks = [
    {value: 1,label: 'Jan'},
    {value: 2,label: 'Feb'},
    {value: 3,label: 'Mar'},
    {value: 4,label: 'Apr'},
    {value: 5,label: 'May'},
    {value: 6,label: 'Jun'},
    {value: 7,label: 'Jul'},
    {value: 8,label: 'Aug'},
    {value: 9,label: 'Sep'},
    {value: 10,label: 'Oct'},
    {value: 11,label: 'Nov'},
    {value: 12,label: 'Dec'}];

const getMonth = sliderNum => marks.filter(val => val['value']==sliderNum)[0]['label']

function valuetext(value) {
    return `${value}°C`;
}

const TimeSlider = (props) => {
    const [value, setValue] = useState([1, 12]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <Box sx={{ width: 750, marginLeft:10, marginTop: 4 }}>
            <Slider
                // getAriaLabel={() => 'Temperature range'}
                // getAriaLabel = {(val) => val}
                defaultValue = {1}
                value={value}
                onChange={handleChange}
                // valueLabelDisplay="on"
                marks = {marks}
                step={1}
                // getAriaValueText={valuetext}
                min ={1}
                max ={12}
                // color="secondary"
            />
            {[getMonth(value[0]),getMonth(value[1])]}
        </Box>
    );
}

export default TimeSlider;