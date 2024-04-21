import React, { useState } from "react";
import './style.css';
import { useMediaQuery, Card, CardActions, CardContent, Button, TextField } from "@mui/material";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

function Contacts() {
    // const isMobile = useMediaQuery('(max-width:600px)');

    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // const handleUpload = () => {
    //     // You can implement the upload functionality here
    //     console.log(formData); // Just for testing, you can replace it with your upload logic
    // };

    return (
        <div>
            <div className="contents1">
                <Card variant="elevation" elevation={3} className="contactCard1">
                    <MarkEmailUnreadIcon className="icons1" />
                    <p className="title1">Your Message Matters</p>
                    <p className="subTitle1">We love to hear from you. Your suggestions,
                        ideas and feedback fuels our mission to challenge
                        stereotypes, empower youth, and advocate for a more
                        equitable world. Use the contact information below
                        to get in touch.
                    </p>
                    <CardContent>
                        <form>
                            <TextField
                                id="fullName"
                                name="fullName"
                                fullWidth
                                label="Your Full Name"
                                variant="outlined"
                                className="fields1"
                                InputLabelProps={{style: {color: 'white'}}}
                                InputProps={{style: {color: 'white', border: '1px solid #ffffff'}}}
                                
                                value={formData.fullName}
                                onChange={handleChange}
                                margin="normal"
                            />
                            <TextField
                                id="address"
                                name="address"
                                fullWidth
                                label="Your Address"
                                variant="outlined"
                                className="fields1"
                                InputLabelProps={{style: {color: 'white'}}}
                                InputProps={{style: {color: 'white', border: '1px solid #ffffff'}}}
                                value={formData.address}
                                onChange={handleChange}
                                margin="normal"
                            />
                            <TextField
                                id="message"
                                name="message"
                                fullWidth
                                label="Write to us"
                                variant="outlined"
                                className="fields1"
                                multiline
                                rows={4}
                                InputLabelProps={{style: {color: 'white', borderColor: 'yellow'}}}
                                InputProps={{style: {color: 'white', borderColor: 'yellow', border: '1px solid #ffffff'}}}
                                value={formData.message}
                                onChange={handleChange}
                                margin="normal"
                            />
                        </form>
                    </CardContent>
                    <CardActions>
                    <Button variant="contained" fullWidth className="donationButton2">Send</Button>
                    </CardActions>
                </Card>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d406011.95791463555!2d39.18264657345294!3d-6.792354933892746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18405c336d3cf8d7%3A0x2a00d8d9b6d1a320!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sin!4v1648147263086!5m2!1sen!2sin"
                width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" 
                style={{border: 0}} 
                loading="lazy"
                title="Dar es Salaam Map"
                ></iframe>

        </div>
    );
}
export default Contacts;
