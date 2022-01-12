import SavedTracksDataGrid from "../components/SavedTracksDataGrid";
import SongCard from "../components/SongCard";
import CardList from "../components/CardList";
import * as PropTypes from "prop-types";
import {Slider} from "@mui/material";

function AirbnbSlider(props) {
    return null;
}


const HomePage = () => {
    return (
        <div >
            <Slider     />
            {/*<CardList/>*/}
             <SongCard maxWidth={160} name="Name" artist="Artist"
                         img="https://i.scdn.co/image/ab6761610000f178a25560f124192bc185a5358f"/>
        </div>
    )
}

export default HomePage;