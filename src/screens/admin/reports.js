import React, { useState, useEffect } from 'react';
import { Button, TextField, Card, CardContent, Typography } from '@mui/material';
import AboutCarousel from '../about/aboutCarousel';
import Part1 from '../about/part1';
import './style.css';
import { useNavigate } from 'react-router-dom';

function ReportForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [pdfFile, setPdfFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState(null);

    const handlePdfFileChange = (event) => {
        setPdfFile(event.target.files[0]);
    };

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        console.log('userId', userId)
        if (userId != 1) {
            handleClick('/admins')
        }
    }, []);

    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('pdf_file', pdfFile);

        fetch('https://herinitiative.or.tz/her-api/api/reports/add_reports.php', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log('Upload successful:', data);
                setUploadStatus(data.message); // Set upload status message
            })
            .catch(error => {
                console.error('Upload failed:', error);
                setUploadStatus('Error uploading file.'); // Set upload status message
            });
    };

    return (
        <div>
            <AboutCarousel />
            <Part1 heading2={'Report Upload'} heading3={'Home/Reports Upload'} />
            <div className="contents">
                <Card variant="elevation" elevation={3} className="contactCard">
                    <p className="title">Create a New Report</p>
                    <Button onClick={() => handleClick('/blogUpload')} variant="contained"  className="donationButton1">Blog</Button>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Title"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <TextField
                                label="Description"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                multiline
                                rows={6}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <input
                                type="file"
                                accept="application/pdf"
                                onChange={handlePdfFileChange}
                                InputLabelProps={{ style: { color: 'black' } }}
                                InputProps={{ style: { color: 'black', border: '1px solid #000000' } }}
                                style={{
                                    color: 'black', border: '1px solid #000000',
                                    width: '97%', height: '40px', alignItems: 'center', borderRadius: '5px',
                                    paddingTop: '20px', paddingLeft: '20px', marginBottom: '20px'
                                }}
                            />
                            <Button type="submit" variant="contained" fullWidth className="donationButton1">Submit</Button>
                            {uploadStatus && <Typography variant="body1" color={uploadStatus.includes('successfully') ? "success" : "error"}>{uploadStatus}</Typography>}
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div >
    );
}

export default ReportForm;
