import {useEffect, useState} from "react";
import {compareYear, modifyRows} from "../utils";
import SongBox from "./SongBox";

const CardsBox = (props) => {
    const [cardContentsBase, setCardContentsBase] = useState([])
    const [cardContents, setCardContents] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/saved-tracks", {credentials: "include"})
            .then((data) => data.json())
            .then(data => data.sort( (a,b) => a.addedAt > b.addedAt ))
            .then(data => data.map(modifyRows))
            .then((data) => setCardContentsBase(data))
    }, [])

    useEffect( () => {
        setCardContents(cardContentsBase.filter(row => compareYear(row,props.yearsVal)))
    },[cardContentsBase,props.yearsVal])

    return (
        <div style={{display:"flex", flexFlow:"row wrap", gap:"20px 60px"}}>
            {cardContents.map(content =>
                <SongBox key={content.uri} name={content.name} artist={content.artist} preview_url={content.preview_url} img={content.albumArt} uri={content.uri} addedOn={new Date(Number(content.addedAt)).toDateString()}/>
            )}
                </div>
    )
}

export default CardsBox