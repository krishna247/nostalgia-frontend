import {Box, ButtonBase, Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography} from "@mui/material";

const songCard = (props) => {
    return (
    <ButtonBase>
        <div style={{width: '300px'}}>
            <Card elevation={20} sx={{backgroundColor : "#515151"}}>
            <Grid container>
                <Grid item width={"100px"}>
                <CardMedia
                    component="img"
                    height="100px"
                    image= {props.img}
                    sx = {{padding:"15px"}}/>
                </Grid>
                <Grid item>
                <CardContent sx={{marginLeft:"15px"}}>
                    <Typography gutterBottom variant="h5" component="div" color={"common.white"} sx={{fontWeight: 600,marginBottom:"0",textAlign:"left" }}>
                        {props.name}
                    </Typography>
                    <Typography color="#1DB954" sx = {{textAlign:"left"}}>
                    {props.artist}
                    </Typography>
                </CardContent>
                    <Typography marginLeft="29px" color="white">
                        Added on {props.addedOn}
                    </Typography>

                </Grid>
            </Grid>
            </Card>
        </div>
    </ButtonBase>
)
}

export default songCard;