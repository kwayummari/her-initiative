import React, { useState, useEffect } from 'react';
import './style.css';
import { Facebook, Instagram, LinkedIn, Menu, ExpandMore } from '@mui/icons-material';
import { AppBar, Box, Toolbar, Drawer, List, ListItem, ListItemText, Tooltip, Collapse, ClickAwayListener } from '@mui/material';
import { Link } from "react-router-dom";

function TopAppBar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(false);
    const [openSubmenu2, setOpenSubmenu2] = useState(false);
    const [openSubmenu3, setOpenSubmenu3] = useState(false);
    const [openSubmenu4, setOpenSubmenu4] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        const isMobileWidth = window.innerWidth <= 900;
        setIsMobile(isMobileWidth);
    };

    const [socialUrls] = useState({
        twitter: 'https://twitter.com/herinitiative?lang=en',
        instagram: 'https://www.instagram.com/herinitiative/?hl=en',
        facebook: 'https://www.facebook.com/teengirlstanzania/',
        linkedin: 'https://www.linkedin.com/'
    });
    const toggleSubmenu = () => {
        setOpenSubmenu(!openSubmenu);
    };
    const toggleSubmenu2 = () => {
        setOpenSubmenu2(!openSubmenu2);
    };
    const toggleSubmenu3 = () => {
        setOpenSubmenu3(!openSubmenu3);
    };
    const toggleSubmenu4 = () => {
        setOpenSubmenu4(!openSubmenu4);
    };
    const openSocialMedia = (url) => {
        window.open(url, '_blank');
    };
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    const handleTooltipClose = () => {
        setOpen(false);
    };
    const handleTooltipOpen = () => {
        setOpen(true);
    };
    const handleTooltipClose2 = () => {
        setOpen2(false);
    };
    const handleTooltipOpen2 = () => {
        setOpen2(true);
    };
    const handleTooltipClose3 = () => {
        setOpen3(false);
    };
    const handleTooltipOpen3 = () => {
        setOpen3(true);
    };
    const handleTooltipClose4 = () => {
        setOpen4(false);
    };
    const handleTooltipOpen4 = () => {
        setOpen4(true);
    };
    return (
        <>
            {!isMobile ? (
                scrolled ? (
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="fixed" style={{ zIndex: 9999, backgroundColor: scrolled ? '#ffffffea' : 'transparent', justifyContent: 'center' }}>
                            <Toolbar className='openToolBar'>
                                <div className="openLogoContainer">
                                    <img src="/logo192.png" alt="logo" width={isMobile ? '50px' : '150px'} />
                                </div>
                                {isMobile ? (
                                    <Menu color='#ffffff' onClick={toggleDrawer} />
                                ) : (
                                    <div className="openBox" >
                                        <Link className='openLinks' to="/">Home</Link>
                                        <ClickAwayListener onClickAway={handleTooltipClose3}>
                                            <Tooltip
                                                PopperProps={{
                                                    disablePortal: true,
                                                }}
                                                onClose={handleTooltipClose3}
                                                open={open3}
                                                disableFocusListener
                                                disableHoverListener
                                                disableTouchListener
                                                title={
                                                    <div>
                                                        <Link className='homeLink1' onClick={handleTooltipClose3} to="/about">Our Story</Link><br />
                                                        <Link className='homeLink1' onClick={handleTooltipClose3} to="/team">Our Team</Link><br />
                                                    </div>
                                                }>
                                                <Link className='openLinks' onClick={handleTooltipOpen3} to="#">About Us <ExpandMore /></Link>
                                            </Tooltip>
                                        </ClickAwayListener>
                                        <ClickAwayListener onClickAway={handleTooltipClose2}>
                                            <Tooltip
                                                PopperProps={{
                                                    disablePortal: true,
                                                }}
                                                onClose={handleTooltipClose2}
                                                open={open2}
                                                disableFocusListener
                                                disableHoverListener
                                                disableTouchListener
                                                title={
                                                    <div>
                                                        <Link className='homeLink1' onClick={handleTooltipClose2} to="/what">Our Programs</Link><br />
                                                    </div>
                                                }>
                                                <Link className='openLinks' onClick={handleTooltipOpen2} to="#">What We Do <ExpandMore /></Link>
                                            </Tooltip>
                                        </ClickAwayListener>
                                        <ClickAwayListener onClickAway={handleTooltipClose}>
                                            <Tooltip
                                                PopperProps={{
                                                    disablePortal: true,
                                                }}
                                                onClose={handleTooltipClose}
                                                open={open}
                                                disableFocusListener
                                                disableHoverListener
                                                disableTouchListener
                                                title={
                                                    <div>
                                                        <Link className='homeLink1' onClick={handleTooltipClose} to="/news">News</Link><br />
                                                        <Link className='homeLink1' onClick={handleTooltipClose} to="/youtube">YouTube</Link><br />
                                                        <Link className='homeLink1' onClick={handleTooltipClose} to="/reports">Reports</Link><br />
                                                        <Link className='homeLink1' onClick={handleTooltipClose} to="/recognitions">Recognitions</Link><br />
                                                        <Link className='homeLink1' onClick={handleTooltipClose} to="/success-stories">Success Stories</Link><br />
                                                    </div>
                                                }>
                                                <Link className='openLinks' onClick={handleTooltipOpen} to="#">Resource Centre <ExpandMore /></Link>
                                            </Tooltip>
                                        </ClickAwayListener>
                                        <ClickAwayListener onClickAway={handleTooltipClose4}>
                                            <Tooltip
                                                PopperProps={{
                                                    disablePortal: true,
                                                }}
                                                onClose={handleTooltipClose4}
                                                open={open4}
                                                disableFocusListener
                                                disableHoverListener
                                                disableTouchListener
                                                title={
                                                    <div>
                                                        <Link className='homeLink1' onClick={handleTooltipClose4} to="/contact">Contacts</Link><br />
                                                        <Link className='homeLink1' onClick={handleTooltipClose4} target="_blank" to="https://www.every.org/her-initiative?utm_campaign=donate-link#/donate">Donate</Link><br />
                                                    </div>
                                                }>
                                                <Link className='openLinks' onClick={handleTooltipOpen4} to="#">Get Involved <ExpandMore /></Link>
                                            </Tooltip>
                                        </ClickAwayListener>
                                    </div>
                                )}
                            </Toolbar>
                        </AppBar>
                    </Box>
                ) : (
                    <div className="appBar">
                        <div className="logoContainer">
                            <img src="/logo192.png" alt="logo" width={isMobile ? '150px' : '250px'} />
                        </div>
                        <div className="box1" >
                            <Link className='homeLink' to="/">Home</Link>
                            <Tooltip title={
                                <div>
                                    <Link className='homeLink1' to="/about">Our Story</Link><br />
                                    <Link className='homeLink1' to="/team">Our Team</Link><br />
                                </div>
                            }>
                                <Link className='links' >About Us <ExpandMore /></Link>
                            </Tooltip>
                            <Tooltip title={
                                <div>
                                    <Link className='homeLink1' to="/what">Our Programs</Link><br />
                                </div>
                            }>
                                <Link className='links' to="#">What We Do <ExpandMore /></Link>
                            </Tooltip>
                            <Tooltip title={
                                <div>
                                    <Link className='homeLink1' to="/news">News</Link><br />
                                    <Link className='homeLink1' to="/youtube">YouTube</Link><br />
                                    <Link className='homeLink1' to="/reports">Reports</Link><br />
                                    <Link className='homeLink1' to="/recognitions">Recognitions</Link><br />
                                    <Link className='homeLink1' to="/success-stories">Success Stories</Link><br />
                                </div>
                            }>
                                <Link className='links' to="#">Resource Centre <ExpandMore /></Link>
                            </Tooltip>
                            <Tooltip title={
                                <div>
                                    <Link className='homeLink1' to="/contact">Contacts</Link><br />
                                    <Link className='homeLink1' target="_blank" to="https://www.every.org/her-initiative?utm_campaign=donate-link#/donate">Donate</Link><br />
                                </div>
                            }>
                                <Link className='links' to="#">Get Involved <ExpandMore /></Link>
                            </Tooltip>
                            <div className='socialIcons'>
                                <img src='/icons/twitter.png' alt='x' width={'20px'} style={{ paddingRight: '20px', paddingLeft: '40px' }} onClick={() => openSocialMedia(socialUrls.twitter)} />
                                <Instagram onClick={() => openSocialMedia(socialUrls.instagram)} />
                                <Facebook onClick={() => openSocialMedia(socialUrls.facebook)} />
                                <LinkedIn onClick={() => openSocialMedia(socialUrls.linkedin)} />
                            </div>
                        </div>

                    </div>
                )

            ) : (
                <div className="appBar">
                    <div className="logoContainer">
                        <img src="/logo192.png" alt="logo" width={isMobile ? '150px' : '200px'} />
                    </div>
                    <Menu className='closedIcon' onClick={toggleDrawer} />
                </div>
            )}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <Link className='homeLink' to="/">Home</Link>
                <Link onClick={toggleSubmenu} to='' className='links'>About Us  <ExpandMore /></Link>
                <Collapse in={openSubmenu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Link className='homeLink1' to="/about">
                            <ListItem>
                                <ListItemText primary="Our Story" />
                            </ListItem>
                        </Link>
                        <Link className='homeLink1' to="/team">
                            <ListItem>
                                <ListItemText primary="Our Team" />
                            </ListItem>
                        </Link>
                    </List>
                </Collapse>
                <Link onClick={toggleSubmenu2} to='' className='links'>What We Do  <ExpandMore /></Link>
                <Collapse in={openSubmenu2} timeout="auto" unmountOnExit>
                    <Link className='homeLink1' to="/what">
                        <ListItem>
                            <ListItemText primary="Our Programs" />
                        </ListItem>
                    </Link>
                </Collapse>
                <Link onClick={toggleSubmenu3} to='' className='links'>Resource Centre <ExpandMore /></Link>
                <Collapse in={openSubmenu3} timeout="auto" unmountOnExit>
                    <Link className='homeLink1' to="/news">
                        <ListItem>
                            <ListItemText primary="News" />
                        </ListItem>
                    </Link>
                    <Link className='homeLink1' to="/youtube">
                        <ListItem>
                            <ListItemText primary="YouTube" />
                        </ListItem>
                    </Link>
                    <Link className='homeLink1' to="/reports">
                        <ListItem>
                            <ListItemText primary="Reports" />
                        </ListItem>
                    </Link>
                    <Link className='homeLink1' to="/recognitions">
                        <ListItem>
                            <ListItemText primary="Recognitions" />
                        </ListItem>
                    </Link>
                    <Link className='homeLink1' to="/success-stories">
                        <ListItem>
                            <ListItemText primary="Success Stories" />
                        </ListItem>
                    </Link>
                </Collapse>
                <Link onClick={toggleSubmenu4} to='' className='links'>Get Involved <ExpandMore /></Link>
                <Collapse in={openSubmenu4} timeout="auto" unmountOnExit>
                    <Link className='homeLink1' target="_blank" to="https://www.every.org/her-initiative?utm_campaign=donate-link#/donate">
                        <ListItem>
                            <ListItemText primary="Donate" />
                        </ListItem>
                    </Link>
                    <Link className='homeLink1' to="/contact">
                        <ListItem>
                            <ListItemText primary="Contacts" />
                        </ListItem>
                    </Link>
                </Collapse>
            </Drawer>
        </>
    );
}

export default TopAppBar;
