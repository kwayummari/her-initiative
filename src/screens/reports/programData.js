import * as React from 'react';
import { useEffect, useState } from 'react';
import { Add } from "@mui/icons-material";
import { Avatar, Grid, Card, Box, useMediaQuery, Modal, Typography } from "@mui/material";
import { Document, Page, pdfjs } from 'react-pdf';

function ReportsData({ programData }) {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [openModal, setOpenModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);

    // Set PDF.js worker script URL
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

    const navigation = (programs) => {
        window.open(`https://herinitiative.or.tz/her-api/api/reports/pdf/${programs.pdf}`, '_blank');
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const renderLogos = () => {
        return (
            <Grid container spacing={4} item xs={12} style={{marginBottom: '200px'}}>
                {programData.map((programs, index) => (
                    <Grid key={index} item xs={isMobile ? 12 : 4} style={{marginBottom: '30px'}}>
                        <Card elevation={0} style={{ borderRadius: '20px', cursor: 'pointer', width: isMobile && '100vw', height: '100%' }}>
                            <div style={{height: '200px'}}>
                            <Document
                                file={`https://herinitiative.or.tz/her-api/api/reports/pdf/${programs.pdf}`}
                                onClick={() => { navigation(programs) }}
                                className='cardImage'
                            >
                                <Page pageNumber={1} />
                            </Document>
                            </div>
                        </Card>
                        <div>
                                <div style={{ display: 'flex' }}>
                                    <Avatar sx={{ bgcolor: '#f3ec1a', marginRight: '0px', marginLeft: '0px', marginTop: '20px' }}>
                                        <Add sx={{ color: '#000000' }} />
                                    </Avatar>
                                    <p onClick={() => { navigation(programs) }} className="programParagraph1">
                                        {programs.title}
                                    </p>
                                </div>
                                <p onClick={() => { navigation(programs) }} className="programParagraph2">
                                    {programs.description} <p style={{ color: '#633e98', fontWeight: 'bold' }} variant="contained" onClick={() => { navigation(programs) }}>View More</p>
                                </p>
                            </div>
                    </Grid>
                ))}
            </Grid>
        );
    };

    return (
        <div className="approach">
            <div className="approachHeader" >
                <p></p>
                <p style={{ paddingTop: '60px' }}>Our Reports</p>
            </div>
            <Box sx={{ marginLeft: !isMobile && "150px", marginRight: !isMobile && "150px", marginTop: "50px", marginBottom: '10px' }}>
                {renderLogos()}
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

export default ReportsData;
