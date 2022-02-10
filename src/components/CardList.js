import SongCard from "./SongCard";
import {useEffect, useState} from "react";
import Masonry from '@mui/lab/Masonry';
import {compareYear, modifyRows} from "../utils";
import {useMediaQuery} from "@mui/material";

const CardList = (props) => {
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
        setCardContents(cardContentsBase.filter(row => compareYear(row,props.yearsVal)))
    },[cardContentsBase,props.yearsVal])

    const numColumns = useMediaQuery('(min-width:600px)') ? 2:1;
    // let numColumns = window.outerWidth > 768 ? 2 :1;
    // useEffect( () => {
    //     numColumns = window.outerWidth > 768 ? 2 :1;
    // },[window.outerWidth])
    //
    console.log("num Columns: "+numColumns)

    return (

    // <Box style ={{display: 'flex',  direction : "row", justifyContent : "space-around" }}>

        <Masonry columns={numColumns} spacing={3}>

        {cardContents.map(content =>
            <SongCard maxWidth={160} key={content.uri} name={content.name} artist={content.artist} preview_url={content.preview_url} img={content.albumArt} uri={content.uri} addedOn={new Date(Number(content.addedAt)).toDateString()}/>
        )}
        </Masonry>

// </Box>

    )

}

export default CardList;