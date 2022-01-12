import {Button} from "@mui/material";
import HomePage from "./HomePage";

const getSpotifyUserLogin = () => {
    fetch("http://localhost:8080/auth")
        .then((response) => response.text())
        .then(response => {
            window.location.replace(response);
        })
}


const HomePageBase = () => {
    const checkCookie = document.cookie.indexOf("access_token")
    console.log(checkCookie)
        if(checkCookie === -1){
            return (
                <Button variant="contained" onClick={getSpotifyUserLogin}>
                    Log in to Spotify
                </Button>
            );
        }
        else{
            return(
                <HomePage/>
            );
        }
    }

export default HomePageBase;