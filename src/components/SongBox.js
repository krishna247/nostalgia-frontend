// maxWidth={160} key={content.uri} name={content.name} artist={content.artist} preview_url={content.preview_url} img={content.albumArt} uri={content.uri} addedOn={new Date(Number(content.addedAt)).toDateString()
import {Box, Container, Grid, Stack, Typography} from "@mui/material";

const SongBox = (props) => {
    return (
        <Box display="flex" flexWrap={"wrap"} lexDirection={"column"} sx={{backgroundColor:"#515151",padding:"20px"}} width="40%" maxHeight={150}>
             <Box style={{flex: "1 1"}}>
                 <audio id={props.uri} src={props.preview_url}/>
                 <img src={props.img} style={{maxHeight:"100%", maxWidth:"100%",height:"120px",width:"auto"}}/>
             </Box>
            <Box style={{flex: "1 1",justifyContent:"start",alignItems:"flex-start",textAlign:"left"}}>
            <Typography>{props.name}</Typography>
            </Box>
        </Box>



    // return (<Grid container >
    //         <Grid item md={5} xs={10} sx={{backgroundColor:"#515151",padding:"20px"}} direction="column">
    //             <Grid container>
    //                 <Grid item xs={12}>
    //                     <audio id={props.uri} src={props.preview_url}/>
    //                     <img src={props.img} style={{maxHeight:"100%", maxWidth:"100%",height:"120px",width:"auto"}}/>
    //                 </Grid>
    //                 <Grid item xs={4}></Grid>
    //                 <Grid item xs={12} sx={{marginLeft:"20px", textAlign: "left"}}>
    //                     <Typography noWrap gutterBottom variant="h5" component="div" color={"common.white"} sx={{fontWeight: 600,marginBottom:"0"}}>
    //                             {props.name.length <=25 ? props.name : props.name.slice(0,22) + '...'}
    //                     </Typography>
    //                 </Grid>
    //                 <Typography noWrap={true} color="#1DB954">
    //                     {props.artist}
    //                 </Typography>
    //
    //             </Grid>
    //          </Grid>
    //         // <Grid item xs={0} md={2} ></Grid>
    //     // </Grid>

    )

}

export default SongBox;