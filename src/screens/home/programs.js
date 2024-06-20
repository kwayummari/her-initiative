import * as React from 'react';
import { useEffect, useState } from 'react';
import { Add } from "@mui/icons-material";
import { Avatar, Button, Grid, CardMedia, CardContent, Card, Box, useMediaQuery, Modal, Typography } from "@mui/material";
// import { useNavigate, Link } from "react-router-dom";

const programData = [
    { image: "panda.jpg", title: "Panda on the ground", subTitle: "Panda Digital", buttonText: '', description: "This is a project that aims at enabling young women to achieve financial freedom...", fullDescription: `This is a project that aims at enabling young women to achieve financial freedom through income generation and job creation. This program targets women aged 18-35, both with and without existing businesses, providing theoretical and practical training and mentorship in entrepreneurial skills and mentorship on business development, mentorship and creating linkages to financial resources. Through an eight-week training program, young women without businesses learn the production of goods and services in sectors like agriculture, health, fashion, and beauty. Those with existing businesses benefit from one-on-one coaching to facilitate growth with a focus on facilitating business growth through one-on-one guidance on business development, financing and markets. Until today we have impacted 210 young women who by chance have managed to establish their businesses.` },
    { image: "planB.jpg", title: "Plan B Project", subTitle: "Plan B", buttonText: '', description: "Plan B Project provides education to out-of-school adolescent girls to fight gender-based violence...", fullDescription: 'Plan B Project provides education to out-of-school adolescent girls to fight gender-based violence whilst building their financial resilience through entrepreneurship training. The combination of these two interventions has proven to be effective in reducing gender-based violence, as it equips young women and girls with the information, skills, finances, and other tools to mitigate the risk of experiencing it, whilst helping survivors to recover..' },
    { image: "mshiko.jpg", title: "Mshiko clubs", subTitle: "Mshiko Clubs", buttonText: '', description: "A project that aims at keeping girls in school by using a hybrid model of economic empowerment and girls...", fullDescription: "A project that aims at keeping girls in school by using a hybrid model of economic empowerment and girls' agency empowerment to increase their interest to stay and enjoy school. Through this program, girls learn how to save money and are rewarded for successfully adopting saving habits. Specific activities in this project include financial literacy training on key concepts such as savings, the establishment of clubs, skills building on extracurricular income-generating activities and girls' agency empowerment to promote girls' self-esteem and self-efficacy to help girls stay and enjoy school as they embrace their journey to financial freedom." },
    // { image: "digimali.jpg", title: "Digimali clubs", description: "Digimali is a project is a project that focuses on enhancing the adaptation of digital business..." },
];
function Programs() {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const isMobile = useMediaQuery('(max-width:600px)');
    const navigation = (programs) => {
        setSelectedProgram(programs);
        setOpenModal(true);
    }
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const handleClick = () => {
        window.location.href = '#/what';;
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const renderLogos = () => {
        return <Grid container spacing={4} item xs={12}>
            {programData.map((programs, index) => (
                <Grid key={index} item xs={isMobile ? 12 : 4}>
                    <Card elevation={0} style={{ borderRadius: '20px', cursor: 'pointer', width: isMobile && '90vw' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image={`/photos/${programs.image}`}
                            onClick={() => { navigation(programs) }}
                            className="cardImage"
                        />
                        <CardContent>
                            <div style={{ display: 'flex' }}>
                                <Avatar sx={{ bgcolor: '#f3ec1a', marginRight: '0px', marginLeft: '0px', marginTop: '20px' }}>
                                    <Add sx={{ color: '#000000' }} />
                                </Avatar>
                                <p onClick={() => { navigation(programs) }} className="programParagraph1">
                                    {programs.title}
                                </p>
                            </div>
                            <p onClick={() => { navigation(programs) }} className="programParagraph2">
                                {programs.description} <p style={{ color: '#633e98', fontWeight: 'bold' }} variant="contained" onClick={() => { navigation(programs) }}>Read More</p>
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
            ))};
        </Grid>
    };

    return (
        <div className="approach">
            <div className="approachHeader">
                <p></p>
                <p>Our Programs</p>
            </div>
            <Box sx={{ marginLeft: !isMobile && "150px", marginRight: !isMobile && "150px", marginTop: "50px", marginBottom: '40px' }}>
                {renderLogos()}

                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" onClick={handleClick} className="programButton">View More</Button>
                </Grid>
                <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        sx={{
                            position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '10px',
                        maxWidth: '80vw',
                        maxHeight: '80vh',
                        overflowY: 'auto',
                        }}
                    >
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {selectedProgram && selectedProgram.title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {selectedProgram && selectedProgram.fullDescription}
                        </Typography>
                    </Box>
                </Modal>
            </Box>
        </div>
    );
}

export default Programs;
