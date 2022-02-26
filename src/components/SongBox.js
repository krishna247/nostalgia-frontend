import {Box, Typography, useMediaQuery} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const SongBox = (props) =>{

    return (
        <Box className={"songBox"} style={{ backgroundColor:"#515151", display:"flex",flexFlow:"column wrap",height:"108.15px", justifyContent:"flex-start"}}>
           <img src ={props.img} style={{ width:"20%", height:"20%", padding:"1em", flex:"3",flexBasis:"60%"}}/>
           <Typography className={"songFontBig"} gutterBottom variant="h5" color={"common.white"} component="div"
                       style={{flexBasis:"27%",marginBottom:0,paddingTop:"0.6em",fontWeight: 400, fontSize:22,textAlign:"left", width:"100%", overflow: "hidden", textOverflow: "ellipsis",whiteSpace: "nowrap"}}>
               {props.name}
           </Typography>
            <Typography className={"songFontBig"} noWrap variant="h5" color={"#1DB954"} component="div" style={{flexBasis:"30%",marginTop:0,fontWeight: 400, fontSize:22,textAlign:"left", width:"100%"}}>
                {props.artist}
            </Typography>
            <Typography className={"songFontSmall"} noWrap variant="h5" color={"white"} component="div" style={{display: "flex","alignItems": "center",fontWeight: 400, fontSize:18,textAlign:"left", width:"100%"}}>
                {props.preview_url ? <MusicNoteIcon style={{marginBottom: "0"}}/> :  <></>} Added on {props.addedOn}
            </Typography>

        </Box>
    )
}

export default SongBox