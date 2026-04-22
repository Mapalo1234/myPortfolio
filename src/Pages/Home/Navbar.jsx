import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <h1 class="navbar--logo">

          <div class="logo-icon">
             <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
             <polygon points="22,2 40,12 40,32 22,42 4,32 4,12"
               fill="none" stroke="#00d4ff" stroke-width="1.5" opacity="0.6"/>
            <polygon points="22,8 36,15.5 36,28.5 22,36 8,28.5 8,15.5"
              fill="none" stroke="#00d4ff" stroke-width="1" opacity="0.8"/>
            <path d="M28 16 C24 14 16 16 16 22 C16 28 24 30 28 28"
           stroke="#00d4ff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
           <circle cx="28" cy="16" r="1.5" fill="#00d4ff"/>
         <circle cx="28" cy="28" r="1.5" fill="#00d4ff"/>
        </svg>
    </div>

         <div class="logo-divider"></div>

           <div class="logo-wordmark">
           <div class="logo-tagline">Technology Solutions</div>
        </div>

    </h1>
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          {/* <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="testimonial"
              className="navbar--content"
            >
              Testimonials
            </Link>
          </li> */}
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="AboutMe"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
