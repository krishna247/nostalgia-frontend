import {Box, Step, StepContent, StepLabel, Stepper} from "@mui/material";
import SongCard from "./SongCard";
import {useEffect, useState} from "react";
import {compareYear, modifyRows} from "../utils";
import Masonry from "@mui/lab/Masonry";

const MonthStepper = (props) => {
    const [cardContentsBase, setCardContentsBase] = useState([])
    const [cardContents, setCardContents] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/saved-tracks", {credentials: "include"})
            .then((data) => data.json())
            .then(data => data.sort( (a,b) => a.addedAt > b.addedAt ).reverse())
            .then(data => data.map(modifyRows))
            .then((data) => setCardContentsBase(data))
    }, [])

    useEffect( () => {
        const temp = cardContentsBase.filter(row => compareYear(row,props.yearsVal));
        let monthDict = {}
        temp.map(row => {
            if ( row['monthYear'] in monthDict){
                monthDict[row['monthYear']].push(row)
            }else{
                monthDict[row['monthYear']] = [row]
            }
        })
        console.log(monthDict)
        setCardContents(monthDict)
    },[cardContentsBase,props.yearsVal])

    return (
    <Box sx={{ maxWidth: 400 }}>
        <Stepper orientation="vertical">
            {Object.keys(cardContents).map(
                ([monthYear, idx]) =>  {
                    return (
                        <Step key={monthYear+idx}>
                            <StepLabel>
                                    {monthYear}
                            </StepLabel>
                            <StepContent>
                                {/*<Masonry columns={3} spacing={4}>*/}
                                {/*    {cardContents[monthYear].map(content =>*/}
                                {/*        <SongCard maxWidth={160} key={content.uri} name={content.name} artist={content.artist} preview_url={content.preview_url} img={content.albumArt} uri={content.uri} addedOn={new Date(Number(content.addedAt)).toDateString()}/>*/}
                                {/*    )}*/}
                                {/*</Masonry>*/}
                            </StepContent>
                        </Step>
                    )
                }
            )}
            {/*<Step key={1}>*/}
            {/*    <StepLabel>*/}
            {/*        First step*/}
            {/*    </StepLabel>*/}
            {/*<StepContent>*/}
            {/*    <SongCard maxWidth={400} name="Name" artist="Artist" addedOn="Jan 1 2021" img="https://i.scdn.co/image/ab67616d0000b273d27f8a33b8a8c0417cdca53f"/>*/}
            {/*</StepContent>*/}
            {/*</Step>*/}


        </Stepper>
    </Box>)
}

export default MonthStepper;