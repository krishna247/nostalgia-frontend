import {ButtonBase, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

const songCard = (props) => {
    return (
    <ButtonBase>
        <div style={{maxWidth: props.maxWidth}}>
            <Card sx = {{maxWidth: props.maxWidth}}>
                {/*<CardActionArea href="https://google.com">*/}
                <CardMedia
                    component="img"
                    height={props.maxWidth}
                    image= {props.img} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    Artist: {props.artist}
                </CardContent>
                {/*</CardActionArea>*/}
            </Card>
        </div>
    </ButtonBase>
)
}

export default songCard;