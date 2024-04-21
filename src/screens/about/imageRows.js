import { React } from "react";
import './styles.css'
import { Grid, CardMedia, Card, useMediaQuery } from "@mui/material";

function ImageRows() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const programData = [
        { image: "fika.jpg" },
        { image: "_YTE2638.jpg"},
        { image: "_YTE8636.jpg" }
    ];
    return (
        <div>
            <p className="storyParagraph3">
                Transitioning to university, Lydia
                spearheaded entrepreneurship campaigns
                like Panda events, fostering knowl-
                edge on entrepreneurship and
                facilitating connections with
                successful industry leaders. The
                formation of Her Ini- tiative was a
                natural progression, catalyzed by a
                series of impactful events in colleges.
                Standing for self-empow- erment, the organization
                aligns itself with the resilience of young
            </p>
            <Grid container spacing={4} item xs={12} style={{paddingLeft: '20px', paddingRight: '20px'}}>
                {programData.map((programs, index) => (
                    <Grid key={index} item xs={isMobile ? 12 : 4} >
                        <Card elevation={0} style={{ borderRadius: '20px', cursor: 'pointer', width: isMobile && '100vw' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={`/photos/${programs.image}`}
                                height={'300px'}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
export default ImageRows;