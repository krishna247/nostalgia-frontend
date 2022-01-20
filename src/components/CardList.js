import SongCard from "./SongCard";
import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import Masonry from '@mui/lab/Masonry';
import {compareYear, modifyRows} from "../utils";

const CardList = (props) => {
    const [cardContents, setCardContents] = useState([])
    useEffect(() => {
            fetch("http://localhost:8080/saved-tracks", {credentials: "include"})
                .then((data) => data.json())
            .then(data => data.filter(row => compareYear(row,props.yearsVal)))
            .then(data => data.map(modifyRows))
            .then((data) => setCardContents(data))
    }, [])

    // const nums =[...Array(5).keys()];
    // const clist = nums.map(num => <SongCard maxWidth={160} name="Name" artist="Artist" img="https://i.scdn.co/image/ab6761610000f178a25560f124192bc185a5358f"/>)


    return (

    // <Box style ={{display: 'flex',  direction : "row", justifyContent : "space-around" }}>
        <Masonry columns={3} spacing={4}>

        {cardContents.map(content =>
            <SongCard maxWidth={160} key={content.uri} name={content.name} artist={content.artist} img={content.albumArt} addedOn={new Date(Number(content.addedAt)).toDateString()}/>
        )}
        </Masonry>

// </Box>

    )

}

export default CardList;