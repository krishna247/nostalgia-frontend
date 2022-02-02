import {ButtonBase, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const songCard = (props) => {
    const onCardHover = () => document.getElementById(props.uri).play()
    const onCardUnhover = () => document.getElementById(props.uri).pause()

    return (
    <ButtonBase>
        <div style={{width: "32em" }}>
            <audio id={props.uri} src={props.preview_url}/>
            <Card elevation={20} sx={{backgroundColor : "#515151", borderRadius: "8px"}} onMouseOver={onCardHover} onMouseOut={onCardUnhover}>
            <Grid container>
                <Grid item width={"100px"}>
                <CardMedia
                    component="img"
                    height="100px"
                    image= {props.img}
                    sx = {{padding:"15px"}}/>
                </Grid>
                <Grid item>
                <CardContent sx={{marginLeft:"20px", textAlign: "left"}}>
                    <Typography noWrap={true} gutterBottom variant="h5" component="div" color={"common.white"} sx={{fontWeight: 600,marginBottom:"0",textAlign:"left" }}>
                        {props.name}
                    </Typography>
                    <Typography noWrap={true} color="#1DB954">
                    {props.artist}
                    </Typography>

                    <Typography noWrap={true} color="white" marginTop="10px" >
                        {props.preview_url ? <MusicNoteIcon style={{marginBottom: "0"}}/> :  <></>} Added on {props.addedOn}
                    </Typography>
                </CardContent>
                </Grid>
            </Grid>
            </Card>
        </div>
    </ButtonBase>
)
}

export default songCard;