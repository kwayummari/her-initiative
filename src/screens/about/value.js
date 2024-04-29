import { React } from "react";
import './styles.css'
import { Grid, Card, useMediaQuery } from "@mui/material";

function Values() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const programData = [
        { image: "/icons/inclusion.png", title: "Inclusion", paragraph: "We believe in diversity and equal access for everyone with no discrimination in gender, race, or religion." },
        { image: "/icons/innovation.png", title: "Innovation", paragraph: "We cultivate an environment where new ideas are embraced, encouraged, and supported to fuel us towards our vision."},
        { image: "/icons/learning.png", title: "Learning", paragraph: "We remain open to new opportunities and ideas focused on our vision and mission, and we embrace the need to adapt when needed." },
        { image: "/icons/partnership.png", title: "Partnership", paragraph: "We believe in collaboration and working jointly with other actors in what we do." }
    ];
    return (
        <div>
            <p className="valuesTitle">Our Values</p>
            <Grid container spacing={isMobile ? 0 : 4} item xs={isMobile ? 10 : 12} style={{
                paddingLeft: !isMobile && '20px',
                paddingRight: !isMobile && '20px',
                justifyContent: 'center'
            }}>
                <Grid item xs={isMobile ? 10 : 8} >
                    <Card elevation={0} style={{
                        padding: '20px',
                        cursor: 'pointer',
                        width: isMobile && '80vw',
                        backgroundColor: "#633e98",
                        borderRadius: '50px'
                    }}>
                    {programData.map((programs, index) => (
                        <div className="valueCard">
                            {/* {!isMobile && <img src={programs.image} width={'100px'} height={'100px'} alt="logo" />} */}
                            <div className="valueSubCard">
                                <p className="valueHead"><img src={programs.image} width={'60px'} height={'60px'} alt="logo" /> {programs.title}</p>
                                <p className="valueParagraph">{programs.paragraph}</p>
                            </div>
                        </div>
                        ))}
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
export default Values;