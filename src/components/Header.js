import "@fontsource/dancing-script"
import "@fontsource/roboto-slab";
// import spotifyLogo from '../assets/Spotify_Logo_RGB_Green.png'
import spotifyLogo from '../assets/Spotify_Icon_RGB_Green.png'
import {Box, Stack} from "@mui/material";
import {Fragment} from "react";


const Header = () => {
    return (
        <Fragment>
        <Stack direction="row" justifyContent="space-around" className={"header"} >
            <Box sx={{fontFamily: 'Dancing Script', fontSize: 'h2.fontSize', color: "white"}}>
                Koishii
            </Box>
            <img src={spotifyLogo} alt={""} style={{maxWidth: "10%", height: "20%", paddingRight:"16px"}}/>
        </Stack>
                <Box component={"span"} sx={{fontFamily: 'Roboto Slab', fontSize: 25, color: "#1DB954",textUnderlineOffset:"4"}}>
                    <span style = {{borderBottom: "1px solid currentColor",lineHeight: 0.8}}>
                    Rediscover old songs by choosing a timeline
                        </span>
            </Box>
        </Fragment>
    )
}

export default Header;