import { m, LazyMotion, domAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from 'react-i18next';

const Invest = () => {
  const { t } = useTranslation();
  const headingRef = useRef(null);
  const scanSVGRef = useRef(null);
  const walletSVGRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "0px 0px -12% 0px" });
  const isScanSVGInView = useInView(scanSVGRef, { once: true, margin: "0px 0px -10% 0px" });
  const isWalletSVGInView = useInView(walletSVGRef, { once: true, margin: "0px 0px -10% 0px" });
  const isMobile = window.innerWidth < 768;

  const animationHeading = !isMobile && {
    initial: { opacity: 0, y: 40 },
    animate: isInView && { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  };

  const animationInfoSection = !isMobile && {
    initial: { opacity: 0, y: 120 },
    animate: isWalletSVGInView && { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.3 },
  };

  const animationInfoHeading = !isMobile && {
    initial: { opacity: 0, y: 30 },
    animate: isWalletSVGInView && { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  };

  const animationInfoButton = !isMobile && {
    initial: { opacity: 0, y: 120 },
    animate: isWalletSVGInView && { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.4 },
  };

  const animationMyWalletSVG = isMobile
    ? {
        initial: { opacity: 0, x: 142.32, y: 80 },
        animate: isWalletSVGInView && { opacity: 1, y: 57.836 },
        transition: { duration: 0.3, delay: 0.3 },
      }
    : {
        initial: { opacity: 0, x: 142.32, y: 80 },
        animate: isWalletSVGInView && { opacity: 1, y: 57.836 },
        transition: { duration: 0.4 },
      };

  return (
    <LazyMotion features={domAnimation}>
      <section className="container">
        <section className="row spacing-between-section">
          <div className="col-md-6 mx-auto text-center" ref={headingRef}>
            <m.span
              {...animationHeading}
              className="bg-primary bg-opacity-25 text-primary text-capitalize rounded text-center mx-auto fs-xs d-block invest-badge"
            >
              {t("scanToEarnSection.header")}
            </m.span>
            <m.h2 {...animationHeading} className="fs-2xl fw-bold text-secondary invest-heading text-center mx-auto">
            {t("scanToEarnSection.mainText")}
            </m.h2>
          </div>
          <div className="row mx-auto">
            <div className="col-md-6">
              <div className="invest-left" style={{ width: "100%", maxWidth: "450px" }}>
                <m.svg
                  viewBox="0 0 467.5 95"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isScanSVGInView && { opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  ref={scanSVGRef}
                >
                  <defs>
                    <linearGradient id="linear-gradient" y1="0.107" x2="1" y2="0.736" gradientUnits="objectBoundingBox">
                      <stop offset="0" stopColor="#fff" />
                      <stop offset="1" stopColor="#f9f9f9" />
                    </linearGradient>
                    <filter id="Rectangle_667" x="332.5" y="0" width="135" height="95" filterUnits="userSpaceOnUse">
                      <feOffset input="SourceAlpha" />
                      <feGaussianBlur stdDeviation="7.5" result="blur" />
                      <feFlood floodOpacity="0.161" />
                      <feComposite operator="in" in2="blur" />
                      <feComposite in="SourceGraphic" />
                    </filter>
                  </defs>
                  <g
                    id="Rectangle_666"
                    data-name="Rectangle 666"
                    transform="translate(0 17.5)"
                    fill="#fff"
                    stroke="#b885fa"
                    strokeWidth="1"
                  >
                    <rect width="450" height="60" rx="4" stroke="none" />
                    <rect x="0.5" y="0.5" width="449" height="59" rx="3.5" fill="none" />
                  </g>
                  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_667)">
                    <rect
                      id="Rectangle_667-2"
                      data-name="Rectangle 667"
                      width="90"
                      height="50"
                      rx="4"
                      transform="translate(355 22.5)"
                      fill="#fff"
                    />
                  </g>
                  <text
                    id="scan"
                    transform="translate(391 53.5)"
                    fill="#373737"
                    fontSize="15"
                    fontFamily="SegoeUI, Segoe UI"
                  >
                    <tspan x="-19.076" y="0">
                      {t("scanToEarnSection.svg.scan")}
                    </tspan>
                  </text>
                  <g
                    id="vuesax_outline_buy-crypto"
                    data-name="vuesax/outline/buy-crypto"
                    transform="translate(12.209 34.192)"
                    opacity="0.5"
                  >
                    <g id="buy-crypto" transform="translate(0 0)">
                      <path
                        id="Vector"
                        d="M8.115,16.242c-.2,0-.426-.011-.628-.022a.842.842,0,0,1-.785-.773A6.484,6.484,0,0,0,.8,9.539a.842.842,0,0,1-.773-.785C.011,8.552,0,8.328,0,8.126a8.126,8.126,0,1,1,8.115,8.115ZM1.67,7.958a8.2,8.2,0,0,1,6.6,6.6,6.446,6.446,0,1,0-6.6-6.6Z"
                        transform="translate(9.258 1.412)"
                        fill="#6c757d"
                      />
                      <path
                        id="Vector-2"
                        data-name="Vector"
                        d="M8.126,16.253A8.126,8.126,0,0,1,8.126,0c.2,0,.426.011.628.022a8.176,8.176,0,0,1,7.465,7.454c.011.224.022.448.022.65A8.116,8.116,0,0,1,8.126,16.253Zm0-14.572a6.445,6.445,0,1,0,6.445,6.445c0-.179-.011-.359-.022-.538a6.492,6.492,0,0,0-5.907-5.9C8.485,1.693,8.306,1.681,8.126,1.681Z"
                        transform="translate(1.401 9.247)"
                        fill="#6c757d"
                      />
                      <path
                        id="Vector-3"
                        data-name="Vector"
                        d="M3.643,7.252a.849.849,0,0,1-.74-.437L2.029,5.223.437,4.349a.845.845,0,0,1,0-1.48L2.029,2,2.9.4a.88.88,0,0,1,1.48,0L5.257,2l1.592.874a.845.845,0,0,1,0,1.48l-1.592.874L4.383,6.815A.849.849,0,0,1,3.643,7.252ZM2.589,3.609l.46.258a.81.81,0,0,1,.336.336l.258.46L3.9,4.2a.81.81,0,0,1,.336-.336l.46-.258-.46-.258A.81.81,0,0,1,3.9,3.015l-.258-.46-.258.46a.81.81,0,0,1-.336.336Z"
                        transform="translate(5.885 13.765)"
                        fill="#6c757d"
                      />
                      <path id="Vector-4" data-name="Vector" d="M0,0H26.9V26.9H0Z" fill="none" opacity="0" />
                    </g>
                  </g>
                  <text
                    id="Token_Name"
                    data-name="Token Name"
                    transform="translate(51 53.5)"
                    fill="#373737"
                    fontSize="17"
                    fontFamily="SegoeUI, Segoe UI"
                  >
                    <tspan x="0" y="0">
                    {t("scanToEarnSection.svg.tokenName")}
                    </tspan>
                  </text>
                  <path
                    id="Vector-5"
                    data-name="Vector"
                    d="M0,11.209,4.484,5.6,0,0"
                    transform="translate(424.695 42.039)"
                    fill="none"
                    stroke="#373737"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </m.svg>
                <svg viewBox="0 0 431.938 257.5" ref={walletSVGRef}>
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="-0.137"
                      y1="-0.084"
                      x2="0.868"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stopColor="#fff" />
                      <stop offset="1" stopColor="#f9f9f9" />
                    </linearGradient>
                    <filter id="Rectangle_670" x="254" y="14" width="134" height="119" filterUnits="userSpaceOnUse">
                      <feOffset dy="3" input="SourceAlpha" />
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feFlood floodOpacity="0.2" />
                      <feComposite operator="in" in2="blur" />
                      <feComposite in="SourceGraphic" />
                    </filter>
                    <filter id="Rectangle_670-2" x="0" y="99" width="186" height="65" filterUnits="userSpaceOnUse">
                      <feOffset dy="3" input="SourceAlpha" />
                      <feGaussianBlur stdDeviation="5" result="blur-2" />
                      <feFlood floodOpacity="0.2" />
                      <feComposite operator="in" in2="blur-2" />
                      <feComposite in="SourceGraphic" />
                    </filter>
                    <filter
                      id="Rectangle_668"
                      x="104.501"
                      y="23.5"
                      width="234"
                      height="234"
                      filterUnits="userSpaceOnUse"
                    >
                      <feOffset dy="3" input="SourceAlpha" />
                      <feGaussianBlur stdDeviation="12.5" result="blur-3" />
                      <feFlood floodOpacity="0.2" />
                      <feComposite operator="in" in2="blur-3" />
                      <feComposite in="SourceGraphic" />
                    </filter>
                    <filter id="Rectangle_669" x="145.001" y="60" width="154" height="155" filterUnits="userSpaceOnUse">
                      <feOffset input="SourceAlpha" />
                      <feGaussianBlur stdDeviation="3" result="blur-4" />
                      <feFlood floodOpacity="0.161" />
                      <feComposite operator="in" in2="blur-4" />
                      <feComposite in="SourceGraphic" />
                    </filter>
                    <filter id="Rectangle_670-3" x="28.001" y="0" width="186" height="61" filterUnits="userSpaceOnUse">
                      <feOffset dy="3" input="SourceAlpha" />
                      <feGaussianBlur stdDeviation="5" result="blur-5" />
                      <feFlood floodOpacity="0.2" />
                      <feComposite operator="in" in2="blur-5" />
                      <feComposite in="SourceGraphic" />
                    </filter>
                    <filter
                      id="Path_503"
                      x="245.013"
                      y="137.749"
                      width="186.924"
                      height="61.385"
                      filterUnits="userSpaceOnUse"
                    >
                      <feOffset dy="3" input="SourceAlpha" />
                      <feGaussianBlur stdDeviation="5" result="blur-6" />
                      <feFlood floodOpacity="0.2" />
                      <feComposite operator="in" in2="blur-6" />
                      <feComposite in="SourceGraphic" />
                    </filter>
                  </defs>
                  <m.g
                    initial={{ opacity: 0, x: 268.98, y: 40 }}
                    animate={isWalletSVGInView && { opacity: 1, y: 8.517 }}
                    transition={{ duration: 0.4 }}
                    id="Group_3564"
                    data-name="Group 3564"
                    transform="translate(268.98 8.517)"
                  >
                    <g transform="matrix(1, 0, 0, 1, -268.98, -8.52)" filter="url(#Rectangle_670)">
                      <rect
                        id="Rectangle_670-4"
                        data-name="Rectangle 670"
                        width="104"
                        height="89"
                        rx="2"
                        transform="translate(269 26)"
                        fill="#fff"
                      />
                    </g>
                    <text
                      id="Top_Tokens"
                      data-name="Top Tokens"
                      transform="translate(0.02 9.483)"
                      fill="#373737"
                      fontSize="8"
                      fontFamily="SegoeUI-Bold, Segoe UI"
                      fontWeight="700"
                      opacity="0.5"
                    >
                      <tspan x="0" y="0">
                      {t("scanToEarnSection.svg.topTokens")}
                      </tspan>
                    </text>
                    <g id="Group_3565" data-name="Group 3565" transform="translate(81.825 25.78)">
                      <rect
                        id="Rectangle_672"
                        data-name="Rectangle 672"
                        width="14"
                        height="13"
                        rx="2"
                        transform="translate(0.195 -0.298)"
                        fill="#ffb300"
                        opacity="0.2"
                      />
                      <text
                        id="_63"
                        data-name="63"
                        transform="translate(7.195 8.702)"
                        fill="#ffb300"
                        fontSize="7"
                        fontFamily="SegoeUI, Segoe UI"
                        letterSpacing="0.02em"
                      >
                        <tspan x="-3.843" y="0">
                          63
                        </tspan>
                      </text>
                    </g>
                    <g id="Group_3566" data-name="Group 3566" transform="translate(81.825 45.956)">
                      <rect
                        id="Rectangle_672-2"
                        data-name="Rectangle 672"
                        width="14"
                        height="13"
                        rx="2"
                        transform="translate(0.018 -0.354)"
                        fill="#ffb300"
                        opacity="0.2"
                      />
                      <text
                        id="_64"
                        data-name="64"
                        transform="translate(7.195 8.526)"
                        fill="#ffb300"
                        fontSize="7"
                        fontFamily="SegoeUI, Segoe UI"
                        letterSpacing="0.02em"
                      >
                        <tspan x="-3.843" y="0">
                          64
                        </tspan>
                      </text>
                    </g>
                    <g id="Group_3567" data-name="Group 3567" transform="translate(81.825 66.132)">
                      <rect
                        id="Rectangle_672-3"
                        data-name="Rectangle 672"
                        width="14"
                        height="13"
                        rx="2"
                        transform="translate(0.195 0.351)"
                        fill="#1dd21d"
                        opacity="0.2"
                      />
                      <text
                        id="_82"
                        data-name="82"
                        transform="translate(7.195 9.351)"
                        fill="#1dd21d"
                        fontSize="7"
                        fontFamily="SegoeUI, Segoe UI"
                        letterSpacing="0.02em"
                      >
                        <tspan x="-3.843" y="0">
                          82
                        </tspan>
                      </text>
                    </g>
                    <g id="Group_3568" data-name="Group 3568" transform="translate(81.825 86.308)">
                      <rect
                        id="Rectangle_672-4"
                        data-name="Rectangle 672"
                        width="14"
                        height="13"
                        rx="2"
                        transform="translate(0.018 0.171)"
                        fill="#1dd21d"
                        opacity="0.2"
                      />
                      <text
                        id="_84"
                        data-name="84"
                        transform="translate(7.195 9.175)"
                        fill="#1dd21d"
                        fontSize="7"
                        fontFamily="SegoeUI, Segoe UI"
                        letterSpacing="0.02em"
                      >
                        <tspan x="-3.843" y="0">
                          84
                        </tspan>
                      </text>
                    </g>
                    <line
                      id="Line_79"
                      data-name="Line 79"
                      x2="68.374"
                      transform="translate(8.407 32.506)"
                      fill="none"
                      stroke="#212121"
                      strokeWidth="1"
                      opacity="0.54"
                    />
                    <line
                      id="Line_80"
                      data-name="Line 80"
                      x2="68.374"
                      transform="translate(8.407 52.682)"
                      fill="none"
                      stroke="#212121"
                      strokeWidth="1"
                      opacity="0.54"
                    />
                    <line
                      id="Line_81"
                      data-name="Line 81"
                      x2="68.374"
                      transform="translate(8.407 72.858)"
                      fill="none"
                      stroke="#212121"
                      strokeWidth="1"
                      opacity="0.54"
                    />
                    <line
                      id="Line_82"
                      data-name="Line 82"
                      x2="68.374"
                      transform="translate(8.407 93.034)"
                      fill="none"
                      stroke="#212121"
                      strokeWidth="1"
                      opacity="0.54"
                    />
                  </m.g>
                  <m.g
                    initial={{ opacity: 0, x: 14.539, y: 120 }}
                    animate={isWalletSVGInView && { opacity: 1, y: 110.518 }}
                    transition={{ duration: 0.4 }}
                    id="Group_3569"
                    data-name="Group 3569"
                    transform="translate(14.539 110.518)"
                  >
                    <g transform="matrix(1, 0, 0, 1, -14.54, -110.52)" filter="url(#Rectangle_670-2)">
                      <rect
                        id="Rectangle_670-5"
                        data-name="Rectangle 670"
                        width="156"
                        height="35"
                        rx="4"
                        transform="translate(15 111)"
                        fill="#fff"
                      />
                    </g>
                    <g
                      id="vuesax_outline_arrange-circle-2"
                      data-name="vuesax/outline/arrange-circle-2"
                      transform="translate(5.846 6.967)"
                    >
                      <g id="arrange-circle-2" transform="translate(0 0)">
                        <path
                          id="Vector"
                          d="M.683,4.147a.678.678,0,0,1-.484-.2.69.69,0,0,1,0-.969L2.977.2a.685.685,0,1,1,.969.969L1.168,3.946A.685.685,0,0,1,.683,4.147Z"
                          transform="translate(12.212 11.947)"
                          fill="#5b75dc"
                        />
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M10.108,1.371H.685A.69.69,0,0,1,0,.685.69.69,0,0,1,.685,0h9.422a.685.685,0,1,1,0,1.371Z"
                          transform="translate(5.566 11.945)"
                          fill="#5b75dc"
                        />
                        <path
                          id="Vector-3"
                          data-name="Vector"
                          d="M.683,4.147a.678.678,0,0,1-.484-.2.69.69,0,0,1,0-.969L2.977.2a.685.685,0,1,1,.969.969L1.168,3.946A.678.678,0,0,1,.683,4.147Z"
                          transform="translate(5.577 5.842)"
                          fill="#5b75dc"
                        />
                        <path
                          id="Vector-4"
                          data-name="Vector"
                          d="M10.108,1.371H.685A.69.69,0,0,1,0,.685.69.69,0,0,1,.685,0h9.422a.685.685,0,1,1,0,1.371Z"
                          transform="translate(5.566 8.618)"
                          fill="#5b75dc"
                        />
                        <path
                          id="Vector-5"
                          data-name="Vector"
                          d="M9.825,19.649a9.825,9.825,0,1,1,9.825-9.825A9.833,9.833,0,0,1,9.825,19.649Zm0-18.278a8.454,8.454,0,1,0,8.454,8.454A8.464,8.464,0,0,0,9.825,1.371Z"
                          transform="translate(1.142 1.142)"
                          fill="#5b75dc"
                        />
                        <path id="Vector-6" data-name="Vector" d="M0,0H21.934V21.934H0Z" fill="none" opacity="0" />
                      </g>
                    </g>
                    <text
                      id="Withdraw_The_Money"
                      data-name="Withdraw The Money"
                      transform="translate(33.461 22.482)"
                      fill="#373737"
                      fontSize="11"
                      fontFamily="SegoeUI, Segoe UI"
                    >
                      <tspan x="0" y="0">
                      {t("scanToEarnSection.svg.withdrawTheMoney")}
                      </tspan>
                    </text>
                  </m.g>
                  <m.g
                    id="Group_3570"
                    {...animationMyWalletSVG}
                    data-name="Group 3570"
                    transform="translate(142.32 57.836)"
                  >
                    <g transform="matrix(1, 0, 0, 1, -142.32, -57.84)" filter="url(#Rectangle_668)">
                      <rect
                        id="Rectangle_668-2"
                        data-name="Rectangle 668"
                        width="159"
                        height="159"
                        rx="8"
                        transform="translate(142 58)"
                        fill="#b885fa"
                      />
                    </g>
                    <g transform="matrix(1, 0, 0, 1, -142.32, -57.84)" filter="url(#Rectangle_669)">
                      <rect
                        id="Rectangle_669-2"
                        data-name="Rectangle 669"
                        width="136"
                        height="137"
                        rx="8"
                        transform="translate(154 69)"
                        fill="#f6f6f6"
                      />
                    </g>
                    <text
                      id="_1_384"
                      data-name="$1,384"
                      transform="translate(77.68 93.164)"
                      fill="#373737"
                      fontSize="26"
                      fontFamily="SegoeUI-Bold, Segoe UI"
                      fontWeight="700"
                      letterSpacing="0.02em"
                    >
                      <tspan x="-42.211" y="0">
                        $1,384
                      </tspan>
                    </text>
                    <text
                      id="_239"
                      data-name="$239"
                      transform="translate(48.68 119.164)"
                      fill="#6c757d"
                      fontSize="11"
                      fontFamily="SegoeUI, Segoe UI"
                    >
                      <tspan x="-11.859" y="0">
                        $239
                      </tspan>
                    </text>
                    <text
                      id="_2_14_"
                      data-name="2,14%"
                      transform="translate(95.68 118.164)"
                      fill="#57ac76"
                      fontSize="10"
                      fontFamily="SegoeUI, Segoe UI"
                    >
                      <tspan x="-13.262" y="0">
                        2,14%
                      </tspan>
                    </text>
                    <text
                      id="My_Wallet"
                      data-name="My Wallet"
                      transform="translate(79.68 50.164)"
                      fill="#373737"
                      fontSize="13"
                      fontFamily="SegoeUI-Bold, Segoe UI"
                      fontWeight="700"
                      opacity="0.5"
                    >
                      <tspan x="-31.021" y="0">
                      {t("scanToEarnSection.svg.myWallet")}
                      </tspan>
                    </text>
                    <g
                      id="vuesax_outline_arrow-up"
                      data-name="vuesax/outline/arrow-up"
                      transform="translate(111.714 109.66)"
                    >
                      <g id="arrow-up" transform="translate(0 0)">
                        <path
                          id="Vector-7"
                          data-name="Vector"
                          d="M6.22,3.652a.358.358,0,0,1-.256-.106L3.29.872.617,3.546A.362.362,0,1,1,.1,3.035L3.035.1a.364.364,0,0,1,.512,0l2.93,2.93a.364.364,0,0,1,0,.512A.35.35,0,0,1,6.22,3.652Z"
                          transform="translate(2.501 1.328)"
                          fill="#57ac76"
                        />
                        <path
                          id="Vector-8"
                          data-name="Vector"
                          d="M.362,8.847A.365.365,0,0,1,0,8.485V.362A.365.365,0,0,1,.362,0,.365.365,0,0,1,.724.362V8.485A.365.365,0,0,1,.362,8.847Z"
                          transform="translate(5.43 1.409)"
                          fill="#57ac76"
                        />
                        <path id="Vector-9" data-name="Vector" d="M0,0H11.583V11.583H0Z" fill="none" opacity="0" />
                      </g>
                    </g>
                  </m.g>
                  <m.g
                    id="Group_3562"
                    initial={{ opacity: 0, x: 42.561, y: 30 }}
                    animate={isWalletSVGInView && { opacity: 1, y: 11.88 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    data-name="Group 3562"
                    transform="translate(42.561 11.88)"
                  >
                    <g transform="matrix(1, 0, 0, 1, -42.56, -11.88)" filter="url(#Rectangle_670-3)">
                      <rect
                        id="Rectangle_670-6"
                        data-name="Rectangle 670"
                        width="156"
                        height="31"
                        rx="4"
                        transform="translate(43 12)"
                        fill="#fff"
                      />
                    </g>
                    <text
                      id="_24_148"
                      data-name="24,148"
                      transform="translate(131.439 20.12)"
                      fill="#373737"
                      fontSize="11"
                      fontFamily="SegoeUI, Segoe UI"
                      letterSpacing="0.02em"
                    >
                      <tspan x="-16.567" y="0">
                        24,148
                      </tspan>
                    </text>
                    <text
                      id="Total_Scans"
                      data-name="Total Scans"
                      transform="translate(9.439 20.12)"
                      fill="#373737"
                      fontSize="11"
                      fontFamily="SegoeUI, Segoe UI"
                    >
                      <tspan x="0" y="0">
                      {t("scanToEarnSection.svg.totalScans")}
                      </tspan>
                    </text>
                  </m.g>
                  <m.g
                    initial={{ opacity: 0, x: 260.013, y: 160 }}
                    animate={isWalletSVGInView && { opacity: 1, y: 149.749 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    id="Group_3563"
                    data-name="Group 3563"
                    transform="translate(260.013 149.749)"
                  >
                    <g transform="matrix(1, 0, 0, 1, -260.01, -149.75)" filter="url(#Path_503)">
                      <path
                        id="Path_503-2"
                        data-name="Path 503"
                        d="M4.484,0H152.441a4.484,4.484,0,0,1,4.484,4.484V26.9a4.484,4.484,0,0,1-4.484,4.484H4.484A4.484,4.484,0,0,1,0,26.9V4.484A4.484,4.484,0,0,1,4.484,0Z"
                        transform="translate(260.01 149.75)"
                        fill="#fff"
                      />
                    </g>
                    <rect
                      id="Rectangle_671"
                      data-name="Rectangle 671"
                      width="22"
                      height="23"
                      rx="2"
                      transform="translate(119.987 4.251)"
                      fill="#ffb300"
                      opacity="0.2"
                    />
                    <text
                      id="_79"
                      data-name="79"
                      transform="translate(129.987 20.251)"
                      fill="#ffb300"
                      fontSize="11"
                      fontFamily="SegoeUI, Segoe UI"
                      letterSpacing="0.02em"
                    >
                      <tspan x="-6.04" y="0">
                        79
                      </tspan>
                    </text>
                    <text
                      id="Averag_Score"
                      data-name="Averag Score"
                      transform="translate(8.987 20.251)"
                      fill="#373737"
                      fontSize="11"
                      fontFamily="SegoeUI, Segoe UI"
                    >
                      <tspan x="0" y="0">
                      {t("scanToEarnSection.svg.averageScore")}
                      </tspan>
                    </text>
                  </m.g>
                </svg>
              </div>
            </div>
            <div className="col-md-6">
              <m.h3 {...animationInfoHeading} className="fs-xl d-flex align-items-center invest-subheading">
                <span className="bg-white scan-icon-wrapper d-flex align-items-center justify-content-center">
                  <svg
                    id="vuesax_outline_buy-crypto"
                    data-name="vuesax/outline/buy-crypto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g id="buy-crypto">
                      <path
                        id="Vector"
                        d="M7.24,14.49c-.18,0-.38-.01-.56-.02a.751.751,0,0,1-.7-.69A5.784,5.784,0,0,0,.71,8.51a.751.751,0,0,1-.69-.7C.01,7.63,0,7.43,0,7.25a7.25,7.25,0,1,1,7.24,7.24ZM1.49,7.1a7.313,7.313,0,0,1,5.89,5.89A5.751,5.751,0,1,0,1.49,7.1Z"
                        transform="translate(8.26 1.26)"
                        fill="#a169dc"
                      />
                      <path
                        id="Vector-2"
                        data-name="Vector"
                        d="M7.25,14.5A7.25,7.25,0,0,1,7.25,0c.18,0,.38.01.56.02a7.294,7.294,0,0,1,6.66,6.65c.01.2.02.4.02.58A7.24,7.24,0,0,1,7.25,14.5Zm0-13A5.75,5.75,0,1,0,13,7.25c0-.16-.01-.32-.02-.48A5.792,5.792,0,0,0,7.71,1.51C7.57,1.51,7.41,1.5,7.25,1.5Z"
                        transform="translate(1.25 8.25)"
                        fill="#a169dc"
                      />
                      <path
                        id="Vector-3"
                        data-name="Vector"
                        d="M3.25,6.47a.757.757,0,0,1-.66-.39L1.81,4.66.39,3.88a.753.753,0,0,1,0-1.32l1.42-.78L2.59.36a.785.785,0,0,1,1.32,0l.78,1.42,1.42.78a.753.753,0,0,1,0,1.32l-1.42.78L3.91,6.08A.757.757,0,0,1,3.25,6.47ZM2.31,3.22l.41.23a.723.723,0,0,1,.3.3l.23.41.23-.41a.723.723,0,0,1,.3-.3l.41-.23-.41-.23a.723.723,0,0,1-.3-.3l-.23-.41-.23.41a.723.723,0,0,1-.3.3Z"
                        transform="translate(5.25 12.28)"
                        fill="#a169dc"
                      />
                      <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" fill="none" opacity="0" />
                    </g>
                  </svg>
                </span>
                {t("scanToEarnSection.subText")}
              </m.h3>
              <m.div {...animationInfoSection}>
                <m.p className="fs-md text-body-text">
                {t("scanToEarnSection.normalText")}
                </m.p>
                <m.p className="fs-md mt-4 text-body-text">
                {t("scanToEarnSection.normalTextSecondParagraph")}
                </m.p>
              </m.div>
              <m.button {...animationInfoButton} className="btn text-white start-button fs-md">
                {t("scanToEarnSection.btn")}
              </m.button>
            </div>
          </div>
        </section>
      </section>
    </LazyMotion>
  );
};

export default Invest;
