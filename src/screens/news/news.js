import * as React from 'react';
import { useState, useEffect } from 'react';
import { Add } from "@mui/icons-material";
import { Avatar, Grid, CardMedia, CardContent, Card, Box, useMediaQuery, Modal, Typography } from "@mui/material";
import parse from 'html-react-parser';
import './style.css'

function Blogs() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [openModal, setOpenModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [programData, setProgramData] = useState(null);

    const navigation = (programs) => {
        setSelectedProgram(programs);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    useEffect(() => {
        fetchProgramData();
    }, []);

    const fetchProgramData = async () => {
        try {
            const response = await fetch('https://herinitiative.or.tz/her-api/api/blog/get_blog.php', {
                method: 'GET',
            });
            const data = await response.json();
            setProgramData(data);
        } catch (error) {
            console.error('Error fetching program data:', error);
        }
    };
    const filterSpecialCharacters = (str) => {
        return str.replace(/[^\w\s]/gi, '');
    };

    const renderBoard = () => {
        return (
            <Grid container spacing={4} item xs={12}>
                {programData && programData.map((programs, index) => (
                    <Grid key={index} item xs={isMobile ? 12 : 4}>
                        <Card elevation={0} style={{ borderRadius: '20px', cursor: 'pointer', width: isMobile && '100vw' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={`https://herinitiative.or.tz/her-api/api/blog/images/${programs.image}`}
                                onClick={() => { navigation(programs) }}
                                height={'500px'}
                            />
                            <CardContent>
                                <div style={{ display: 'flex' }}>
                                    <Avatar sx={{ bgcolor: '#f3ec1a', marginRight: '0px', marginLeft: '0px', marginTop: '20px' }}>
                                        <Add sx={{ color: '#000000' }} />
                                    </Avatar>
                                    <p onClick={() => { navigation(programs) }} className="newsTitle">
                                    {filterSpecialCharacters(programs.title)}
                                    </p>
                                </div>
                                <p onClick={() => { navigation(programs) }} className="programParagraph2">
                                    {programs.description} <span style={{ color: '#633e98', fontWeight: 'bold', cursor: 'pointer' }}>View More</span>
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        );
    };

    const renderBlocks = (blocks) => {
        return blocks.map((block, index) => {
            switch (block.type) {
                case 'paragraph':
                    return <p key={index}>{parse(block.data.text)}</p>;
                case 'header':
                    const Tag = `h${block.data.level}`;
                    return <Tag key={index}>{block.data.text}</Tag>;
                case 'list':
                    return (
                        <ul key={index}>
                            {block.data.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{parse(item)}</li>
                            ))}
                        </ul>
                    );
                case 'ordered-list':
                    return (
                        <ol key={index}>
                            {block.data.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{parse(item)}</li>
                            ))}
                        </ol>
                    );
                case 'image':
                    return <img key={index} src={block.data.file.url} alt={block.data.caption} width={'100%'} />;
                case 'linkTool':
                    return (
                        <p key={index}>
                            Tagged <a href={block.data.link}>{block.data.meta.hashtag}</a>
                        </p>
                    );
                default:
                    return null;
            }
        });
    };

    return (
        <div className="approach">
            <div className="approachHeader">
                <p></p>
                <p>Our Blogs</p>
            </div>
            <Box sx={{ marginLeft: !isMobile && "150px", marginRight: !isMobile && "150px", marginTop: "50px", marginBottom: '40px' }}>
                {programData && renderBoard()}
            </Box>
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
                        {selectedProgram && filterSpecialCharacters(selectedProgram.title)}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {selectedProgram && renderBlocks(JSON.parse(selectedProgram.full_description).blocks)}
                    </Typography>

                </Box>
            </Modal>
        </div>
    );
}

export default Blogs;
