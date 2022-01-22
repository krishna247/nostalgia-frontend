import {Button} from "@mui/material";
import HomePage from "./HomePage";
import {checkIsLocal} from "../utils";

const getSpotifyUserLogin = () => {
    const authURL = checkIsLocal() ? "http://localhost:8080/auth" : "http://3.65.240.94:8080/auth"
    fetch(authURL,{mode: "no-cors"})
        .then((response) => response.text())
        .then(response => {
            console.log('Redirect: '+response.toString())
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