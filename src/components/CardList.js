import SongCard from "./SongCard";
import {useEffect, useState} from "react";
import Masonry from '@mui/lab/Masonry';
import {compareYear, modifyRows} from "../utils";

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


    return (

    // <Box style ={{display: 'flex',  direction : "row", justifyContent : "space-around" }}>
        <Masonry columns={3} spacing={4}>

        {cardContents.map(content =>
            <SongCard maxWidth={160} key={content.uri} name={content.name} artist={content.artist} preview_url={content.preview_url} img={content.albumArt} uri={content.uri} addedOn={new Date(Number(content.addedAt)).toDateString()}/>
        )}
        </Masonry>

// </Box>

    )

}

export default CardList;