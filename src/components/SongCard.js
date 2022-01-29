import {ButtonBase, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const songCard = (props) => {
    const onCardHover = () => {
        const audioElement = document.getElementById(props.uri)
        // setTimeout( () => audioElement.play(),1000)
        audioElement.play()
    }

    const onCardUnhover = () => {
        console.log(props)
        const audioElement = document.getElementById(props.uri)
        audioElement.pause()
    }


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

                    <Typography noWrap={true} color="white" marginTop="10px" marginLeft="20px">
                        Added on {props.addedOn}
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