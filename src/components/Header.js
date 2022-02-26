import "@fontsource/dancing-script"
import "@fontsource/roboto-slab";
import spotifyLogo from '../assets/Spotify_Logo_RGB_Green.png'
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Fragment} from "react";


const Header = (props) => {
    return (
        <Fragment>
        <Stack direction="row" justifyContent="space-between">
            <Box sx={{fontFamily: 'Dancing Script', fontSize: 'h2.fontSize', color: "white"}}>
                Koishii
            </Box>
            <img src={spotifyLogo} style={{maxWidth: "20%", height: "20%", paddingRight:"16px"}}/>
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