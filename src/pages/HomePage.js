import CardList from "../components/CardList";
import Header from "../components/Header";
import YearSlider from "../components/YearSlider";
import {useState} from "react";
import {Container} from "@mui/material";
import YearButtonGroup from "../components/YearButtonGroup";

const HomePage = () => {
    const [years, setYears] = useState([2021, 2022]);

    return (
        <Container style={{marginTop:"3%"}}>
            <Header/>
            <YearButtonGroup yearsVal={years} setYearsVal={setYears}/>
            {/*<YearSlider yearsVal={years} setYearsVal={setYears}/>*/}
            <br/><br/>
            {/*<CardList yearsVal={years}/>*/}
            {/*<SongCard maxWidth={400} name="Name" artist="Artist" addedOn="Jan 1 2021" img="https://i.scdn.co/image/ab67616d0000b273d27f8a33b8a8c0417cdca53f"/>*/}
        </Container>
    )
}

export default HomePage;