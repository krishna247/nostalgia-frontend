import CardList from "../components/CardList";
import Header from "../components/Header";
import YearSlider from "../components/YearSlider";
import {useState} from "react";
import {Container, useMediaQuery} from "@mui/material";
import YearButtonGroup from "../components/YearButtonGroup";
import SongBox from "../components/SongBox";
import SongCard from "../components/SongCard";
import CardsBox from "../components/CardsBox";


const HomePage = () => {
    const [years, setYears] = useState([2021, 2022]);
    const yearNavigator = useMediaQuery('(min-width:900px)') ?
        <YearSlider yearsVal={years} setYearsVal={setYears}/>: <YearButtonGroup yearsVal={years} setYearsVal={setYears}/>;
    return (
        <Container style={{marginTop:"3%"}}>
            <Header/>
            <br/><br/>
            {yearNavigator}
            <br/>
            <CardsBox yearsVal={years}/>
            {/*<SongBox name="Start Again (Feat. Logic)" artist="Artist" addedOn="Jan 1 2021" uri="uri" img="https://i.scdn.co/image/ab67616d0000b273d27f8a33b8a8c0417cdca53f" preview_url="https://p.scdn.co/mp3-preview/50e3c0cef4b662386922ea74bf81496263948a2b?cid=774b29d4f13844c495f206cafdad9c86"/>*/}
            {/*<CardList yearsVal={years}/>*/}
            {/*<SongCard maxWidth={160} name="Name" artist="Artist" addedOn="Jan 1 2021" img="https://i.scdn.co/image/ab67616d0000b273d27f8a33b8a8c0417cdca53f"/>*/}
        </Container>
    )
}

export default HomePage;