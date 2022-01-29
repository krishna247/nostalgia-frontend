import {Box, Step, StepContent, StepLabel, Stepper} from "@mui/material";
import SongCard from "./SongCard";

const MonthStepper = (props) => {
    return (
    <Box sx={{ maxWidth: 400 }}>
        <Stepper orientation="vertical">
            <Step key={1}>
                <StepLabel>
                    First step
                </StepLabel>
            <StepContent>
                <SongCard maxWidth={400} name="Name" artist="Artist" addedOn="Jan 1 2021" img="https://i.scdn.co/image/ab67616d0000b273d27f8a33b8a8c0417cdca53f"/>
            </StepContent>
            </Step>

            <Step key={2}>
                <StepLabel>
                    Second step
                </StepLabel>
                <StepContent>
                    Second step content
                </StepContent>
            </Step>


        </Stepper>
    </Box>)
}

export default MonthStepper;