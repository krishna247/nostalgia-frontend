import SavedTracksDataGrid from "../components/SavedTracksDataGrid";
import SongCard from "../components/SongCard";
import CardList from "../components/CardList";
import * as PropTypes from "prop-types";
import {Container, Slider} from "@mui/material";
import Header from "../components/Header";

const HomePage = () => {
    return (
        <div>
            {/*<Header/>*/}
            {/*<CardList/>*/}
            <SongCard maxWidth={400} name="Name" artist="Artist" addedOn="Jan 1 2021" img="https://i.scdn.co/image/ab67616d0000b273d27f8a33b8a8c0417cdca53f"/>
        </div>
    )
}

export default HomePage;