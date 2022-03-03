import {Box, Typography} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const SongBox = (props) =>{
    const onCardHover = () => {
        let audio = document.getElementById(props.uri)
        audio.volume = 0.5
        audio.play()
    }
    const onCardUnhover = () => document.getElementById(props.uri).pause()

    return (
        <Box className={"songBox"}
                onMouseOver = {onCardHover}
                onMouseOut = {onCardUnhover}
                style={{ backgroundColor:"#515151", display:"flex",flexFlow:"column wrap",height:"108.15px", justifyContent:"flex-start", overflow:"clip"}}>
            <audio id={props.uri} src={props.preview_url}/>
            <img src ={props.img} alt={"album cover art"} style={{ width:"30%", height:"auto", padding:"1em",flexBasis:"60%"}}/>
           <Typography className={"songFontBig"} variant="h5" color={"common.white"} component="div"
                       style={{flexBasis:"41%",paddingTop:"0.6em",fontWeight: 400, fontSize:22,textAlign:"left", width:"100%", overflow: "clip  ", textOverflow: "ellipsis",whiteSpace: "nowrap"}}>
               {props.name}
           </Typography>
            <Typography className={"songFontBig"} noWrap variant="h5" color={"#1DB954"} component="div" style={{flexBasis:"30%",flexShrink:0,fontWeight: 400, fontSize:22,textAlign:"left", width:"100%"}}>
                {props.artist}
            </Typography>
            <Typography className={"songFontSmall"} noWrap variant="h5" color={"white"} component="div" style={{display: "flex","alignItems": "center",fontWeight: 400, fontSize:18,textAlign:"left", width:"100%"}}>
                {props.preview_url ? <MusicNoteIcon style={{marginBottom: "0"}}/> :  <></>} Added on {props.addedOn}
            </Typography>

        </Box>
    )
}

export default SongBox