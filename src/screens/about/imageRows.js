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
        <div style={{marginTop: '100px'}}>
            <div style={{paddingTop: !isMobile ? '400px' : '0'}}>
            <p className="storyParagraph2" style={{textAlign: 'left'}}>
                    The formation of Her Initiative was a natural progression,
                    catalyzed by a series of impactful events in colleges.
                    Standing for self-empowerment, the organization aligns
                    itself with the resilience of young women and girls who
                    navigate life's challenges with determination.
            </p>
            </div>
            <Grid container spacing={4} item xs={12} style={{paddingLeft: '20px', paddingRight: '20px'}}>
                {programData.map((programs, index) => (
                    <Grid key={index} item xs={isMobile ? 12 : 4} >
                        <Card elevation={0} style={{ borderRadius: '20px', cursor: 'pointer', width: isMobile && '90vw' }}>
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