import React from 'react'
import logo from '../assets/images/Deve-Logo.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TbError404 } from "react-icons/tb";
import { AiTwotoneHome } from "react-icons/ai";
export default function NotFound() {
    const { t } = useTranslation()
    return (
        <>
            <div className='container ' >
                <div className='navbar-notFound'>
                    <img src={logo} alt="" />
                    <svg
                        className="ms-3 d-md-inline d-none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1"
                        height="32"
                        viewBox="0 0 1 32"
                    >
                        <rect id="Rectangle_42" data-name="Rectangle 42" width="1" height="32" fill="#6c757d" opacity="0.4" />
                    </svg>
                    <span className="ms-3 d-md-inline nav-span fs-sm">{t("headSection.slogan")}</span>
                </div>
                <div className='notFound-mainContent'>
                    <TbError404 />
                    <h2>Page Not Found!</h2>
                    <p>Sorry, the page you were looking for does not exist.</p>
                    <Link to='/' className='text-decoration-none'>
                        <button className='btn-backToHome'><AiTwotoneHome /> <span> Go Back</span></button>
                    </Link>

                </div>
            </div>
        </>
    )
}
