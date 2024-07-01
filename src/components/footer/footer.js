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

            // Create and append the widget elements
            const widgetImg = document.createElement("img");
            widgetImg.src = '/photos/ngo.png';
            // http://www.ngosource.org/sites/default/files/ngos_ed_on_file_widget.png
            widgetImg.alt = 'NGOsource Equivalency Determination on File';
            widgetImg.style.marginTop = '80px';
            widgetImg.style.marginRight = '10px';
            // widgetImg.style.marginRight = '30px';

            const widgetLink = document.createElement("a");
            const theUrl = 'http://www.ngosource.org/about-equivalency-determination-on-file-badge';
            widgetLink.href = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + 'ref=' + encodeURIComponent(window.location.href);
            widgetLink.title = 'About Equivalency Determination on File badge';
            widgetLink.appendChild(widgetImg);

            const widgetContainer = document.createElement('div');
            widgetContainer.id = 'ngos-ed-on-file-widget-script-17336c1f-917d-492b-bc53-225c95e103da';
            widgetContainer.appendChild(widgetLink);

            const footerContainer = document.querySelector('.footerContainer');
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

    return (
        <div className='footer' style={{ backgroundColor: '#212121' }}>
            <footer className='footerContainer'>
                <div className="containerFooter">
                    <div className="footerContainer1">
                        <img src="/logo192.png" alt="logo" width={'200px'} />
                        <p>
                            Her Initiative, a young women driven non-profit, aims to redefine
                            societal norms in Tanzania, promoting financial resilience
                            among adolescent girls and young women by integrating economic
                            empowerment and technology.
                        </p>
                    </div>
                    <div className='footerContainer2'>
                        <h3><b>Quick Links</b></h3>
                        <p onClick={() => handleClick('/about')}><b>About Us</b></p>
                        <p onClick={() => handleClick('/news')}><b>Blog</b></p>
                        <p onClick={() => handleClick('/what')}><b>Projects</b></p>
                        <p onClick={() => handleClick('/reports')}><b>Reports</b></p>
                        <p onClick={() => handleClick('/admins')}><b>Admin</b></p>
                    </div>
                    <div className='footerContainer4'>
                        <h3>Get In Touch</h3>
                        <p>
                            <b>Physical Address:</b> Asmara Street, Mikocheni,<br /> Dar es Salaam, Tanzania<br />
                            <b>Postal Address:</b> P.O.Box 66, <br />
                            <b>Tel:</b> +255 (0) 734283347. <br />
                            <b>Email:</b> info@herinitiative.or.tz <br />
                            <b>Web:</b> www.herinitiative.co.tz <br />
                        </p>
                    </div>
                </div>
            </footer>
            <div className='bottomFooter'>
                <h3 className='line'>© Copyright 2024 | Her Initiative | All Rights Reserved</h3>
                <div className='socialIcons'>
                    <img src='/icons/twitter.png' alt='x' width={'20px'} style={{ paddingRight: '20px', paddingLeft: '40px' }} onClick={() => openSocialMedia(socialUrls.twitter)} />
                    <Instagram onClick={() => openSocialMedia(socialUrls.instagram)} />
                    <Facebook onClick={() => openSocialMedia(socialUrls.facebook)} />
                    <LinkedIn onClick={() => openSocialMedia(socialUrls.linkedin)} />
                </div>
            </div>
        </div>
    );
}

export default BottomFooter;
