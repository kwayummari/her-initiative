import React from "react";
import './styles.css'
import { Grid, useMediaQuery } from "@mui/material";

function Story2({ smallTitle, bigTitle, Paragraph, moreParagraph, buttonText, imageUrl, seeButton, isAbout, imageUrl2 }) {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <div className="StoryContainer">
            <Grid container className="story" >
                <Grid container className="firstPart">
                    <Grid item xs={isMobile ? 12 : 6} className="storyContainers">
                        <p className="storyHeader1">{smallTitle}</p>
                        <p className="storyHeader2">{bigTitle}</p>
                        <p className="storyParagraph2">
                            {Paragraph}
                        </p>
                        {isMobile && (
                            <img src={imageUrl} alt="logo" className="storyImage1" />
                        )}
                    </Grid>
                    <Grid item xs={isMobile ? 12 : 6} className="ImageContainers">
                        <img src={imageUrl} alt="logo" className="storyImage1" />
                    </Grid>
                </Grid>
                <div className="connectingLine"></div>
                {isAbout && (
                    <Grid container className="secondPart">
                        <Grid item xs={isMobile ? 12 : 6} className="storyContainers">
                            <p className="storyParagraph2">
                                {moreParagraph}
                            </p>
                            {isMobile && (
                            <img src={imageUrl2} alt="logo" className="storyImage1" />
                        )}
                        </Grid>
                        <Grid item xs={isMobile ? 12 : 6} className="ImageContainers">
                            <img src={imageUrl2} alt="logo" className="storyImage1" />
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}
export default Story2;