import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const TopAppBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownStates, setDropdownStates] = useState({
    about: false,
    whatWeDo: false,
    resource: false,
    getInvolved: false
  });

  const socialUrls = {
    twitter: 'https://twitter.com/herinitiative?lang=en',
    instagram: 'https://www.instagram.com/herinitiative/?hl=en',
    facebook: 'https://www.facebook.com/teengirlstanzania/',
    linkedin: 'https://www.linkedin.com/'
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSocialMedia = (url) => {
    window.open(url, '_blank');
  };

  const toggleDropdown = (key) => {
    setDropdownStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const closeDropdowns = () => {
    setDropdownStates({
      about: false,
      whatWeDo: false,
      resource: false,
      getInvolved: false
    });
  };

  const handleMouseEnter = (key) => {
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`main-nav fixed-top ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link className="nav-brand" to="/">
            <img src="/logo192.png" alt="logo" className="nav-logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="nav-menu d-none d-lg-flex">
            <Link className="nav-link" to="/">Home</Link>

            <div className="nav-item-dropdown"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}>
              <span className="nav-link">About Us</span>
              {activeDropdown === 'about' && (
                <div className="dropdown-content">
                  <Link className="dropdown-link" to="/about">Our Story</Link>
                  <Link className="dropdown-link" to="/team">Our Team</Link>
                </div>
              )}
            </div>

            <div className="nav-item-dropdown"
              onMouseEnter={() => handleMouseEnter('whatWeDo')}
              onMouseLeave={handleMouseLeave}>
              <span className="nav-link">What We Do</span>
              {activeDropdown === 'whatWeDo' && (
                <div className="dropdown-content">
                  <Link className="dropdown-link" to="/what">Our Programs</Link>
                </div>
              )}
            </div>

            <div className="nav-item-dropdown"
              onMouseEnter={() => handleMouseEnter('resource')}
              onMouseLeave={handleMouseLeave}>
              <span className="nav-link">Resource Centre</span>
              {activeDropdown === 'resource' && (
                <div className="dropdown-content">
                  <Link className="dropdown-link" to="/news">News</Link>
                  <Link className="dropdown-link" to="/youtube">YouTube</Link>
                  <Link className="dropdown-link" to="/reports">Reports</Link>
                  <Link className="dropdown-link" to="/recognitions">Recognitions</Link>
                  <Link className="dropdown-link" to="/success-stories">Success Stories</Link>
                </div>
              )}
            </div>

            <div className="nav-item-dropdown"
              onMouseEnter={() => handleMouseEnter('getInvolved')}
              onMouseLeave={handleMouseLeave}>
              <span className="nav-link">Get Involved</span>
              {activeDropdown === 'getInvolved' && (
                <div className="dropdown-content">
                  <Link className="dropdown-link" to="/contact">Contact</Link>
                  <a className="dropdown-link" href="https://www.every.org/her-initiative?utm_campaign=donate-link#/donate" target="_blank" rel="noopener noreferrer">Donate Myriad USA</a>
                  <a className="dropdown-link" href="https://myriadaustralia.org/services/donate/her-initiative/" target="_blank" rel="noopener noreferrer">Donate Myriad AUSTRALIA</a>
                  <a className="dropdown-link" href="https://donate.transnationalgiving.eu/landing/Herinitiative?lang=en_EN" target="_blank" rel="noopener noreferrer">Donate Myriad EUROPEAN</a>
                </div>
              )}
            </div>

            <div className="social-icons">
              <img src="/icons/twitter.png" alt="Twitter" onClick={() => openSocialMedia(socialUrls.twitter)} />
              <Instagram style={{ color: '#f3ec1a' }} onClick={() => openSocialMedia(socialUrls.instagram)} />
              <Facebook style={{ color: '#f3ec1a' }} onClick={() => openSocialMedia(socialUrls.facebook)} />
              <LinkedIn style={{ color: '#f3ec1a' }} onClick={() => openSocialMedia(socialUrls.linkedin)} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn d-lg-none" onClick={() => setDrawerOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <button className="close-drawer" onClick={() => setDrawerOpen(false)}>×</button>
        </div>
        <div className="drawer-content">
          <Link className="drawer-link" to="/" onClick={() => setDrawerOpen(false)}>Home</Link>

          <div className="drawer-dropdown">
            <div className="drawer-link" onClick={() => toggleDropdown('about')}>
              About Us <span className="dropdown-arrow">▼</span>
            </div>
            {dropdownStates.about && (
              <div className="drawer-dropdown-content">
                <Link className="drawer-sublink" to="/about" onClick={() => setDrawerOpen(false)}>Our Story</Link>
                <Link className="drawer-sublink" to="/team" onClick={() => setDrawerOpen(false)}>Our Team</Link>
              </div>
            )}
          </div>

          <div className="drawer-dropdown">
            <div className="drawer-link" onClick={() => toggleDropdown('whatWeDo')}>
              What We Do <span className="dropdown-arrow">▼</span>
            </div>
            {dropdownStates.whatWeDo && (
              <div className="drawer-dropdown-content">
                <Link className="drawer-sublink" to="/what" onClick={() => setDrawerOpen(false)}>Our Programs</Link>
              </div>
            )}
          </div>

          <div className="drawer-dropdown">
            <div className="drawer-link" onClick={() => toggleDropdown('resource')}>
              Resource Centre <span className="dropdown-arrow">▼</span>
            </div>
            {dropdownStates.resource && (
              <div className="drawer-dropdown-content">
                <Link className="drawer-sublink" to="/news" onClick={() => setDrawerOpen(false)}>News</Link>
                <Link className="drawer-sublink" to="/youtube" onClick={() => setDrawerOpen(false)}>YouTube</Link>
                <Link className="drawer-sublink" to="/reports" onClick={() => setDrawerOpen(false)}>Reports</Link>
                <Link className="drawer-sublink" to="/recognitions" onClick={() => setDrawerOpen(false)}>Recognitions</Link>
                <Link className="drawer-sublink" to="/success-stories" onClick={() => setDrawerOpen(false)}>Success Stories</Link>
              </div>
            )}
          </div>

          <div className="drawer-dropdown">
            <div className="drawer-link" onClick={() => toggleDropdown('getInvolved')}>
              Get Involved <span className="dropdown-arrow">▼</span>
            </div>
            {dropdownStates.getInvolved && (
              <div className="drawer-dropdown-content">
                <Link className="drawer-sublink" to="/contact" onClick={() => setDrawerOpen(false)}>Contact</Link>
                <a className="drawer-sublink" href="https://www.every.org/her-initiative?utm_campaign=donate-link#/donate" target="_blank" rel="noopener noreferrer">Donate Myriad USA</a>
                <a className="drawer-sublink" href="https://myriadaustralia.org/services/donate/her-initiative/" target="_blank" rel="noopener noreferrer">Donate Myriad AUSTRALIA</a>
                <a className="drawer-sublink" href="https://donate.transnationalgiving.eu/landing/Herinitiative?lang=en_EN" target="_blank" rel="noopener noreferrer">Donate Myriad EUROPEAN</a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay for mobile drawer */}
      {drawerOpen && (
        <div className="drawer-overlay" onClick={() => setDrawerOpen(false)}></div>
      )}

      <style>{`
        .main-nav {
          padding: 1rem 0;
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .main-nav:not(.scrolled) {
          background: transparent;
        }

        .main-nav.scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .nav-logo {
          width: ${scrolled ? '120px' : '150px'};
          height: auto;
          transition: width 0.3s ease;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: ${scrolled ? '#633e98' : '#ffffff'};
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          cursor: pointer;
        }

        .nav-item-dropdown {
          position: relative;
        }

        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          min-width: 200px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          padding: 0.5rem 0;
          z-index: 1000;
        }

        .dropdown-link {
          display: block;
          padding: 0.75rem 1.5rem;
          color: #633e98;
          text-decoration: none;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }

        .dropdown-link:hover {
          background-color: #f3ec1a;
        }

        .social-icons {
          background-color: #633e98;
          padding: 0.5rem 2rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-left: 2rem;
        }

        .social-icons img,
        .social-icons icon {
          width: 24px;
          height: 24px;
          color: #f3ec1a;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .social-icons img:hover,
        .social-icons i:hover {
          transform: scale(1.2);
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          padding: 10px;
          cursor: pointer;
        }

        .mobile-menu-btn span {
          display: block;
          width: 25px;
          height: 2px;
          background-color: ${scrolled ? '#633e98' : '#ffffff'};
          transition: all 0.3s ease;
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -300px;
          width: 300px;
          height: 100vh;
          background-color: #ffffff;
          z-index: 2000;
          transition: right 0.3s ease;
          overflow-y: auto;
        }

        .mobile-drawer.open {
          right: 0;
        }

        .drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1999;
        }

        .drawer-header {
          padding: 1rem;
          border-bottom: 1px solid #eee;
        }

        .close-drawer {
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          float: right;
        }

        .drawer-content {
          padding: 1rem 0;
        }

        .drawer-link {
          display: block;
          padding: 1rem;
          color: #633e98;
          text-decoration: none;
          font-weight: 600;
          border-bottom: 1px solid #eee;
          cursor: pointer;
        }

        .drawer-sublink {
          display: block;
          padding: 0.75rem 2rem;
          color: #633e98;
          text-decoration: none;
          background-color: #f9f9f9;
        }

        .dropdown-arrow {
          float: right;
          font-size: 0.8rem;
        }

        @media (max-width: 991px) {
          .mobile-menu-btn {
            display: flex;
          }

          .nav-menu {
            display: none;
          }

          .main-nav {
            background: rgba(99, 62, 152, 0.95);
          }

          .nav-logo {
            width: 100px;
          }
        }
      `}</style>
    </>
  );
};

export default TopAppBar