import * as React from 'react';
import { useState } from 'react';
import { Add } from "@mui/icons-material";
import { Avatar, Grid, CardMedia, CardContent, Card, Box, useMediaQuery, Modal, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";

function Members({ programData, teamData }) {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [openModal, setOpenModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);

    const navigation = (programs) => {
        setSelectedProgram(programs);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    // const handleClick = () => {
    //     window.location.href = '/what';
    // };

    const renderBoard = () => {
        return (
            <Grid container spacing={4} item xs={12}>
                {programData.map((programs, index) => (
                    <Grid key={index} item xs={isMobile ? 12 : 3}>
                        <Card elevation={0} style={{ borderRadius: '20px', cursor: 'pointer', width: isMobile && '100vw' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={`/photos/${programs.image}`}
                                onClick={() => { navigation(programs) }}
                                height={isMobile? '400px' : '400px'}
                            />
                            <CardContent>
                                <div style={{ display: 'flex' }}>
                                    <Avatar sx={{ bgcolor: '#f3ec1a', marginRight: '0px', marginLeft: '0px', marginTop: '20px' }}>
                                        <Add sx={{ color: '#000000' }} />
                                    </Avatar>
                                    <p onClick={() => { navigation(programs) }} className="programParagraph3">
                                        {programs.title}
                                    </p>
                                </div>
                                <p style={{ textAlign: 'left', fontWeight: '700', fontSize: '18px' }}>{programs.subTitle}</p>
                                <p onClick={() => { navigation(programs) }} className="programParagraph2">
                                    {programs.description}
                                    <span style={{ color: '#633e98', fontWeight: 'bold', cursor: 'pointer' }}>Read More</span>
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        );
    };

    const renderTeam = () => {
        return (
            <Grid container spacing={4} item xs={12}>
                {teamData.map((programs, index) => (
                    <Grid key={index} item xs={isMobile ? 12 : 3}>
                        <Card elevation={0} style={{ borderRadius: '20px', cursor: 'pointer', width: isMobile && '100vw' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={`/photos/${programs.image}`}
                                onClick={() => { navigation(programs) }}
                                height={isMobile? '400px' : '400px'}
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
                                <p style={{ textAlign: 'left', fontWeight: '500', fontSize: '20px' }}>{programs.subTitle}</p>
                                {/* <p onClick={() => { navigation(programs) }} className="programParagraph2">
                                    {programs.description} <span style={{ color: '#633e98', fontWeight: 'bold', cursor: 'pointer' }}>View More</span>
                                </p> */}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        );
    };

    return (
        <div className="approach">
            <div className="approachHeader">
                <p></p>
                <p>Our Board</p>
            </div>
            <Box sx={{ marginLeft: !isMobile && "150px", marginRight: !isMobile && "150px", marginTop: "50px", marginBottom: '40px' }}>
                {renderBoard()}
            </Box>
            <div className="approachHeader">
                <p></p>
                <p>Our Team</p>
            </div>
            <Box sx={{ marginLeft: !isMobile && "150px", marginRight: !isMobile && "150px", marginTop: "50px", marginBottom: '40px' }}>
                {renderTeam()}

                {/* <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" onClick={handleClick} className="programButton">View More</Button>
                </Grid> */}
            </Box>
            {/* Modal for Full Description */}
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
        </div>
    );
}

export default Members;
