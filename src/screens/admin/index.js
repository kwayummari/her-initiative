import React, { useState } from 'react';
import { Button, TextField, Card, CardContent, Typography } from '@mui/material';
import AboutCarousel from '../about/aboutCarousel';
import Part1 from '../about/part1';
import './style.css';
import { useNavigate } from 'react-router-dom';

function Authentication() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [uploadStatus, setUploadStatus] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('password', password);

        try {
            const response = await fetch('https://herinitiative.or.tz/her-api/api/auth/login.php', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data == 1) {
                setUploadStatus('Login successful');
                localStorage.setItem('userId', data );
                handleClick('/blogUpload')
            }
        } catch (error) {
            setUploadStatus('Something went wrong');
        }
    };
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <div>
            <AboutCarousel />
            <Part1 heading2={'AUTHENTICATION'} heading3={'Home/Login'} />
            <div className="contents">
                <Card variant="elevation" elevation={3} className="contactCard">
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{ style: { color: 'black' } }}
                                InputProps={{ style: { color: 'black', border: '1px solid #000000' } }}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                label="Password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                type="password"
                                InputLabelProps={{ style: { color: 'black' } }}
                                InputProps={{ style: { color: 'black', border: '1px solid #000000' } }}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button type="submit" variant="contained" fullWidth className="donationButton1">LOGIN</Button>
                            {uploadStatus && <Typography variant="body1" color={uploadStatus.includes('successful') ? "success" : "error"}>{uploadStatus}</Typography>}
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Authentication;
