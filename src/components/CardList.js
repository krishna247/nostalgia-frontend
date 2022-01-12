import SongCard from "./SongCard";
import {Box} from "@mui/material";

const CardList = (props) => {
    const nums =[...Array(5).keys()];
    const clist = nums.map(num => <SongCard maxWidth={160} name="Name" artist="Artist" img="https://i.scdn.co/image/ab6761610000f178a25560f124192bc185a5358f"/>)
    return (

    <Box style ={{display: 'flex',  direction : "row", justifyContent : "space-around" }}>
        {clist}
        </Box>

    )

}

export default CardList;