import React, { useState } from "react";
import logo from "../../../assets/images/Deve-Logo.svg";

const Navbar = () => {
  const [shadow, setShadow] = useState({ boxShadow: "none" });
  const [bgcolor, setBgcolor] = useState({ color: "unset" });

  /* Add box shadow when scroll */
  const listenScrollEvent = (e) => {
    if (window.scrollY > 1) {
      setShadow({ boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 15px 0px" });
      setBgcolor({ color: "white" });
    } else {
      setShadow({ boxShadow: "none" });
      setBgcolor({ color: "unset" });
    }
  };

  window.addEventListener("scroll", listenScrollEvent);

  return (
    <div className="container bg-nav sticky-top nav-border">
      <div className="d-flex justify-content-between pt-3 d-md-none mt-2 mb-3">
        <span className="mx-2 fs-sm">Trust, Security, Credibility</span>
        <div>
          <svg
            className="mx-2"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            viewBox="0 0 19.692 16"
          >
            <path
              id="Twitter"
              d="M19.692,1.894a8.1,8.1,0,0,1-2.32.637A4.052,4.052,0,0,0,19.148.3a8.074,8.074,0,0,1-2.566.979A4.042,4.042,0,0,0,9.592,4.039,4.085,4.085,0,0,0,9.7,4.96,11.469,11.469,0,0,1,1.372.739a4.043,4.043,0,0,0,1.25,5.392A4.007,4.007,0,0,1,.792,5.627v.051a4.041,4.041,0,0,0,3.24,3.96,4.034,4.034,0,0,1-1.065.142,3.974,3.974,0,0,1-.76-.073,4.046,4.046,0,0,0,3.774,2.806A8.116,8.116,0,0,1,.964,14.241,8.143,8.143,0,0,1,0,14.185,11.433,11.433,0,0,0,6.193,16,11.415,11.415,0,0,0,17.688,4.508c0-.176,0-.349-.012-.522a8.211,8.211,0,0,0,2.016-2.09Z"
              fill="#6c757d"
            />
          </svg>
          <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
              id="Instagram"
              d="M11.234,16H4.766A4.772,4.772,0,0,1,0,11.234V4.766A4.772,4.772,0,0,1,4.766,0h6.467A4.772,4.772,0,0,1,16,4.766v6.467A4.772,4.772,0,0,1,11.234,16ZM4.766,1.609A3.161,3.161,0,0,0,1.609,4.766v6.467A3.16,3.16,0,0,0,4.766,14.39h6.467a3.16,3.16,0,0,0,3.157-3.157V4.766a3.16,3.16,0,0,0-3.157-3.157ZM8,12.138A4.138,4.138,0,1,1,12.138,8,4.143,4.143,0,0,1,8,12.138ZM8,5.472A2.528,2.528,0,1,0,10.528,8,2.531,2.531,0,0,0,8,5.472Zm4.146-.587a.992.992,0,1,1,.992-.991A.993.993,0,0,1,12.146,4.885Z"
              fill="#6c757d"
            />
          </svg>
        </div>
      </div>
      <div className="d-none d-md-block h-25 bg-white text-white">hello</div>

      <nav
        className="navbar text-center nav-container navbar-expand-lg nav-border"
        style={{ boxShadow: shadow.boxShadow, backgroundColor: bgcolor.color }}
      >
        <div className="container-fluid">
          {/*logo 
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="0 0 48 48">
            <defs>
              <linearGradient id="linear-gradient" x1="0.423" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#aa79f0"/>
                <stop offset="1" stopColor="#944ec2"/>
              </linearGradient>
            </defs>
            <path id="Deve_Logo" data-name="Deve Logo" d="M405.786,384.721h-21.12v14.4l14.4,12,24-14.4-24,26.4-24-20v-28h30.72a17.28,17.28,0,0,1,17.28,17.28v1.92l-9.372,4.686-.228-6.606A7.49,7.49,0,0,0,405.786,384.721Z" transform="translate(-375.066 -375.121)" fill="url(#linear-gradient)"/>
          </svg>*/}
          <a>
            <img src={`${logo}`} />

            <svg
              className="ms-3 d-md-inline d-none"
              xmlns="http://www.w3.org/2000/svg"
              width="1"
              height="32"
              viewBox="0 0 1 32"
            >
              <rect id="Rectangle_42" data-name="Rectangle 42" width="1" height="32" fill="#6c757d" opacity="0.4" />
            </svg>

            <span className="ms-3 d-md-inline d-none nav-span fs-sm">Trust, Security, Credibility</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Partners
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Scan to Earn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item d-none d-lg-inline">
                <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="1" height="32" viewBox="0 0 1 32">
                  <rect id="Rectangle_42" data-name="Rectangle 42" width="1" height="32" fill="#6c757d" opacity="0.4" />
                </svg>
              </li>
              <li className="nav-item dropdown margin">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path
                      id="Path_72"
                      data-name="Path 72"
                      d="M93,14a9,9,0,1,0,9,9A9.01,9.01,0,0,0,93,14Zm-.687,17.11a8.151,8.151,0,0,1-7.448-7.862c3.153,3.284,3.961,3.322,4.24,3.335.3.013.66.022,1.055.024a2.175,2.175,0,0,1,2.153,2.168Zm.861.027V28.776a3.038,3.038,0,0,0-3.008-3.029c-.384,0-.738-.011-1.022-.023-.312-.015-1.551-.809-4.228-3.673a8.135,8.135,0,0,1,13.623-5.01l-1.946.8a.612.612,0,0,1-.236.047h-.9a1.5,1.5,0,0,0-1.484,1.363l-.128,1.485a.633.633,0,0,1-.4.533l-.188.075a1.49,1.49,0,0,0,.548,2.877l2.473-.085a1.364,1.364,0,0,1,1.41,1.327l.029,1.122a1.5,1.5,0,0,0,.456,1.034l.865.832a8.121,8.121,0,0,1-5.866,2.686ZM98.772,27a.636.636,0,0,1-.194-.439l-.029-1.122a2.225,2.225,0,0,0-2.3-2.164l-2.408.085h-.035a.63.63,0,0,1-.23-1.216l.187-.075a1.5,1.5,0,0,0,.939-1.26l.128-1.487a.631.631,0,0,1,.626-.575h.9a1.461,1.461,0,0,0,.565-.112l2.258-.927a8.123,8.123,0,0,1,.4,10.072Z"
                      transform="translate(-84 -14)"
                      fill="#6c757d"
                    />
                  </svg>
                  English
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item">Arabic</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Russian</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <button className="nav-link nav-btn">↓ Whitepaper</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="icons d-md-block d-none mt-2 me-4">
        <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="19.692" height="16" viewBox="0 0 19.692 16">
          <path
            id="Twitter"
            d="M19.692,1.894a8.1,8.1,0,0,1-2.32.637A4.052,4.052,0,0,0,19.148.3a8.074,8.074,0,0,1-2.566.979A4.042,4.042,0,0,0,9.592,4.039,4.085,4.085,0,0,0,9.7,4.96,11.469,11.469,0,0,1,1.372.739a4.043,4.043,0,0,0,1.25,5.392A4.007,4.007,0,0,1,.792,5.627v.051a4.041,4.041,0,0,0,3.24,3.96,4.034,4.034,0,0,1-1.065.142,3.974,3.974,0,0,1-.76-.073,4.046,4.046,0,0,0,3.774,2.806A8.116,8.116,0,0,1,.964,14.241,8.143,8.143,0,0,1,0,14.185,11.433,11.433,0,0,0,6.193,16,11.415,11.415,0,0,0,17.688,4.508c0-.176,0-.349-.012-.522a8.211,8.211,0,0,0,2.016-2.09Z"
            fill="#6c757d"
          />
        </svg>
        <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path
            id="Instagram"
            d="M11.234,16H4.766A4.772,4.772,0,0,1,0,11.234V4.766A4.772,4.772,0,0,1,4.766,0h6.467A4.772,4.772,0,0,1,16,4.766v6.467A4.772,4.772,0,0,1,11.234,16ZM4.766,1.609A3.161,3.161,0,0,0,1.609,4.766v6.467A3.16,3.16,0,0,0,4.766,14.39h6.467a3.16,3.16,0,0,0,3.157-3.157V4.766a3.16,3.16,0,0,0-3.157-3.157ZM8,12.138A4.138,4.138,0,1,1,12.138,8,4.143,4.143,0,0,1,8,12.138ZM8,5.472A2.528,2.528,0,1,0,10.528,8,2.531,2.531,0,0,0,8,5.472Zm4.146-.587a.992.992,0,1,1,.992-.991A.993.993,0,0,1,12.146,4.885Z"
            fill="#6c757d"
          />
        </svg>
        <span className="mx-2 fs-sm">:Follow us on</span>
      </div>
    </div>
  );
};

export default Navbar;
