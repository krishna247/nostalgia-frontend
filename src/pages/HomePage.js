import CardList from "../components/CardList";
import Header from "../components/Header";
import YearSlider from "../components/YearSlider";
import {useState} from "react";
import MonthStepper from "../components/MonthStepper";

const HomePage = () => {
    const [years, setYears] = useState([2021, 2022]);

    // const cardInfo = {addedAt: "1641840825000",
    //     albumArt: "https://i.scdn.co/image/ab67616d0000b273402b3da3968107b3db52efb6",
    //     artist: "Troye Sivan",
    //     id: "spotify:track:4z8Ll8nU1jMqB8HvKTyLP1",
    //     name: "Happy Little Pill",
    //     preview_url: "https://p.scdn.co/mp3-preview/50e3c0cef4b662386922ea74bf81496263948a2b?cid=0fb5df0740314db9a59d826b3c46a53c",
    //     uri: "spotify:track:4z8Ll8nU1jMqB8HvKTyLP1"}

    return (
        <div>
            <Header/>
            {/*<AudioPlay/>*/}

            {/*<TimeSlider/>*/}
            <YearSlider yearsVal={years} setYearsVal={setYears}/>
            {/*<MonthStepper/>*/}
            <CardList yearsVal={years}/>
            {/*<SongCard maxWidth={400} name={cardInfo.name} artist={cardInfo.artist} addedOn={new Date(Number(cardInfo.addedAt)).toDateString()} img={cardInfo.albumArt} />*/}
            {/*<SongCard maxWidth={400} name="Name" artist="Artist" addedOn="Jan 1 2021" img="https://i.scdn.co/image/ab67616d0000b273d27f8a33b8a8c0417cdca53f"/>*/}
        </div>
    )
}

export default HomePage;