import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import './style.css';

function BottomFooter() {
    useEffect(() => {
        const addWidget = () => {
            const existingWidget = document.getElementById('ngos-ed-on-file-widget-script-17336c1f-917d-492b-bc53-225c95e103da');
            if (existingWidget) {
                existingWidget.parentNode.removeChild(existingWidget);
            }

            const widgetImg = document.createElement("img");
            widgetImg.src = '/photos/ngo.png';
            widgetImg.alt = 'NGOsource Equivalency Determination on File';
            widgetImg.style.marginTop = '20px';
            // widgetImg.style.marginRight = '10px';

            const widgetLink = document.createElement("a");
            const theUrl = 'http://www.ngosource.org/about-equivalency-determination-on-file-badge';
            widgetLink.href = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + 'ref=' + encodeURIComponent(window.location.href);
            widgetLink.title = 'About Equivalency Determination on File badge';
            widgetLink.appendChild(widgetImg);

            const widgetContainer = document.createElement('div');
            widgetContainer.id = 'ngos-ed-on-file-widget-script-17336c1f-917d-492b-bc53-225c95e103da';
            widgetContainer.appendChild(widgetLink);

            const footerContainer = document.querySelector('.donation');
            footerContainer.appendChild(widgetContainer);
        };

        addWidget();
    }, []);

    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    const [socialUrls] = useState({
        twitter: 'https://twitter.com/herinitiative?lang=en',
        instagram: 'https://www.instagram.com/herinitiative/?hl=en',
        facebook: 'https://www.facebook.com/teengirlstanzania/',
        linkedin: 'https://www.linkedin.com/'
    });

    const openSocialMedia = (url) => {
        window.open(url, '_blank');
    };

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscription = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        try {
            const response = await fetch('https://herinitiative.or.tz/her-api/api/newsLetter/add_email.php', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                setMessage('Thank you for subscribing!');
                setEmail('');
            } else {
                setMessage('Subscription failed. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className='footer' style={{ backgroundColor: '#212121' }}>
            <footer className='footerContainer py-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 footerContainer1 mb-4">
                            <img src="/logo192.png" alt="logo" width="200px" />
                            <p>
                                Her Initiative, a young women driven non-profit, aims to redefine
                                societal norms in Tanzania, promoting financial resilience
                                among adolescent girls and young women by integrating economic
                                empowerment and technology.
                            </p>
                        </div>
                        <div className='col-md-3 footerContainer2 mb-4'>
                            <h3><b>Quick Links</b></h3>
                            <ul className="list-unstyled">
                                <li onClick={() => handleClick('/about')}><b>About Us</b></li>
                                <li onClick={() => handleClick('/news')}><b>Blog</b></li>
                                <li onClick={() => handleClick('/what')}><b>Projects</b></li>
                                <li onClick={() => handleClick('/reports')}><b>Reports</b></li>
                                <li onClick={() => handleClick('/admins')}><b>Admin</b></li>
                            </ul>
                        </div>
                        <div className='col-md-3 footerContainer4 mb-4'>
                            <h3>Get In Touch</h3>
                            <p>
                                <b>Physical Address:</b> Asmara Street, Mikocheni,<br /> Dar es Salaam, Tanzania<br />
                                <b>Postal Address:</b> P.O.Box 66, <br />
                                <b>Tel:</b> +255 (0) 734283347. <br />
                                <b>Email:</b> info@herinitiative.or.tz <br />
                                <b>Web:</b> www.herinitiative.co.tz <br />
                            </p>
                        </div>
                        <div className="col-md-3 footerContainer4 mb-4">
                            <h3>Newsletter</h3>
                            <form className="form-inline" onSubmit={handleSubscription}>
                                <div className="input-group">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="form-control rounded-0"
                                    />
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-primary rounded-0">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {message && <p>{message}</p>}
                            <div className='donation'></div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='bottomFooter text-center pt-2 mt-5'>
                <h3 className='line'>© Copyright 2024 | Her Initiative | All Rights Reserved</h3>
                <div className='socialIcons d-inline-flex'>
                    <img src='/icons/twitter.png' alt='x' width='20px' className="mx-2" onClick={() => openSocialMedia(socialUrls.twitter)} />
                    <Instagram className="mx-2" onClick={() => openSocialMedia(socialUrls.instagram)} />
                    <Facebook className="mx-2" onClick={() => openSocialMedia(socialUrls.facebook)} />
                    <LinkedIn className="mx-2" onClick={() => openSocialMedia(socialUrls.linkedin)} />
                </div>
            </div>
        </div>
    );
}

export default BottomFooter;
