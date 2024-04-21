import React from "react";
import './styles.css'
import { Grid, Button, useMediaQuery } from "@mui/material";

function Story({ smallTitle, bigTitle, Paragraph, moreParagraph, buttonText, imageUrl, seeButton, isAbout, imageUrl2}) {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <div className="StoryContainer">
            <Grid container className="story" >
                <Grid item xs={isMobile ? 12 : 6} className="storyContainers">
                    <p className="storyHeader1">{smallTitle}</p>
                    <p className="storyHeader2">{bigTitle}</p>
                    <p className="storyParagraph">
                        {Paragraph}
                    </p>
                    {seeButton && (
                        <Button variant="contained" className="storyButton">{buttonText}</Button>
                    )}
                </Grid>
                <Grid item xs={isMobile ? 12 : 6} className="ImageContainers">
                    <img src={imageUrl} width={'90vw'} alt="logo" className="storyImage" />
                </Grid>
                {isAbout && (
                    <Grid container className="story">
                        <Grid item xs={isMobile ? 12 : 6} className="ImageContainers">
                            <img src={imageUrl2} alt="logo" className="storyImage" />
                        </Grid>
                        <Grid item xs={isMobile ? 12 : 6} className="storyContainers">
                            <p className="storyParagraph1">{moreParagraph}</p>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}
export default Story;