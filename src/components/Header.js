import "@fontsource/roboto"
import "@fontsource/dancing-script"
import spotifyLogo from '../assets/Spotify_Logo_RGB_Green.png'
import {Box, Typography} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const robotoTheme = createTheme({
    typography: {
        "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
        "fontSize": 14,
        color: "pink"

    }
});

const dancingScriptTheme = createTheme({
    typography: {
            fontFamily: "Dancing Script",
            color: "pink"
            },
    palette: {
        text:{
            primary: "#FFFFFF"
        }
    }
});

const Header = (props) => {
    return (
        <Box sx={{justifyContent:"space-between"}}>
            <ThemeProvider theme={dancingScriptTheme}>
                App Name
            </ThemeProvider>
        <img src={spotifyLogo} width="100"/>
        </Box>
    )
}

export default Header;