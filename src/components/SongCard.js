import {ButtonBase, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const songCard = (props) => {
    const onCardHover = () => document.getElementById(props.uri).play()
    const onCardUnhover = () => document.getElementById(props.uri).pause()

    return (
    <ButtonBase>
        <div style={{width: "80%" }}>
            <audio id={props.uri} src={props.preview_url}/>
            <Card elevation={20} sx={{backgroundColor : "#515151", borderRadius: "8px"}} onMouseOver={onCardHover} onMouseOut={onCardUnhover}>
            <Grid container>
                <Grid item width={"30%"}>
                <CardMedia
                    component="img"
                    height="100px"
                    image= {props.img}
                    sx = {{padding:"15px"}}/>
                </Grid>
                <CardContent sx={{marginLeft:"20px", textAlign: "left"}}>
                    <Grid item>
                    <Typography noWrap gutterBottom variant="h5" component="div" color={"common.white"} sx={{fontWeight: 600,marginBottom:"0",textAlign:"left",width:"80%" }}>
                        {props.name}
                    </Typography>
                    <Typography noWrap={true} color="#1DB954">
                    {props.artist}
                    </Typography>
                    </Grid>
                    <Grid item>
                    <Typography noWrap={true} color="white" marginTop="10px" >
                        {props.preview_url ? <MusicNoteIcon style={{marginBottom: "0"}}/> :  <></>} Added on {props.addedOn}
                    </Typography>
                    </Grid>
                </CardContent>
                </Grid>
            {/*</Grid>*/}
            </Card>
        </div>
    </ButtonBase>
)
}

export default songCard;