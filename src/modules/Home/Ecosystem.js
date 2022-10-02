import EcosystemImage from "../../assets/images/Ecosystem.png";
const Ecosystem = () => {
  return (
    <>
      <div className="position-relative">
        <img src={EcosystemImage} className="ecosystem-svg" alt="ecosystem" title="ecosystem" />
        <div className="ecosystem-header-center">Our Vision</div>
      </div>
    </>

    // <div className="circleWrapper">
    //   <svg
    //     className="position-absolute"
    //     width="18"
    //     height="18"
    //     viewBox="0 0 18 18"
    //     style={{ bottom: "0", left: "38%" }}
    //   >
    //     <defs>
    //       <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
    //         <stop offset="0" stopColor="#aa79f0" />
    //         <stop offset="1" stopColor="#944ec2" />
    //       </linearGradient>
    //     </defs>
    //     <circle id="Ellipse_76" data-name="Ellipse 76" cx="9" cy="9" r="9" fill="url(#linear-gradient)" />
    //   </svg>
    //   <svg
    //     className="position-absolute"
    //     style={{ bottom: "3%", right: "22.5%" }}
    //     width="43"
    //     height="43"
    //     viewBox="0 0 43 43"
    //   >
    //     <defs>
    //       <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
    //         <stop offset="0" stopColor="#aa79f0" />
    //         <stop offset="1" stopColor="#944ec2" />
    //       </linearGradient>
    //     </defs>
    //     <circle id="Ellipse_75" data-name="Ellipse 75" cx="21.5" cy="21.5" r="21.5" fill="url(#linear-gradient)" />
    //   </svg>
    //   <svg
    //     className="position-absolute"
    //     style={{ top: "9.8%", right: "18%" }}
    //     width="14"
    //     height="14"
    //     viewBox="0 0 14 14"
    //   >
    //     <defs>
    //       <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
    //         <stop offset="0" stopColor="#aa79f0" />
    //         <stop offset="1" stopColor="#944ec2" />
    //       </linearGradient>
    //     </defs>
    //     <circle id="Ellipse_74" data-name="Ellipse 74" cx="7" cy="7" r="7" fill="url(#linear-gradient)" />
    //   </svg>

    //   <svg xmlns="http://www.w3.org/2000/svg" className="outerCircle" viewBox="0 0 509 508">
    //     <g
    //       id="Ellipse_1"
    //       data-name="Ellipse 1"
    //       fill="none"
    //       stroke="#6c757d"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       strokeWidth="6"
    //       strokeDasharray="0 30"
    //       opacity="0.8"
    //     >
    //       <ellipse cx="254.5" cy="254" rx="254.5" ry="254" stroke="none" />
    //       <ellipse cx="254.5" cy="254" rx="251.5" ry="251" fill="none" />
    //     </g>
    //   </svg>
    //   <div className="innerCircleWrapper position-absolute top-50 start-50 translate-middle">
    //     <svg xmlns="http://www.w3.org/2000/svg" className="innerCircle" width="297" height="296" viewBox="0 0 297 296">
    //       <g
    //         id="Ellipse_4"
    //         data-name="Ellipse 4"
    //         fill="none"
    //         stroke="#6c757d"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         strokeWidth="4"
    //         stroke-dasharray="0 20"
    //         opacity="0.6"
    //       >
    //         <ellipse cx="148.5" cy="148" rx="148.5" ry="148" stroke="none" />
    //         <ellipse cx="148.5" cy="148" rx="146.5" ry="146" fill="none" />
    //       </g>
    //     </svg>
    //   </div>
    //   <div className="customAtom bg-white" style={{ left: "7%", bottom: "8%" }}>
    //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    //       <g
    //         id="vuesax_outline_bitcoin-convert"
    //         data-name="vuesax/outline/bitcoin-convert"
    //         transform="translate(-364 -188)"
    //       >
    //         <g id="bitcoin-convert" transform="translate(364 188)">
    //           <path
    //             id="Vector"
    //             d="M1.119,12.75a1.12,1.12,0,0,1-.96-1.695L1.734,8.43A1.127,1.127,0,0,1,3.669,9.585l-.405.675a9.408,9.408,0,0,0,7.245-9.135,1.125,1.125,0,0,1,2.25,0A11.667,11.667,0,0,1,1.119,12.75Z"
    //             transform="translate(22.881 22.83)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-2"
    //             data-name="Vector"
    //             d="M1.125,12.75A1.133,1.133,0,0,1,0,11.625,11.645,11.645,0,0,1,11.625,0a1.12,1.12,0,0,1,.96,1.7L11.01,4.32A1.127,1.127,0,0,1,9.075,3.165L9.48,2.49a9.407,9.407,0,0,0-7.245,9.135A1.111,1.111,0,0,1,1.125,12.75Z"
    //             transform="translate(0.375 0.33)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-3"
    //             data-name="Vector"
    //             d="M5.34,5.625H1.125A1.133,1.133,0,0,1,0,4.5V1.125A1.133,1.133,0,0,1,1.125,0H5.34A2.9,2.9,0,0,1,8.16,2.82,2.833,2.833,0,0,1,5.34,5.625ZM2.25,3.375H5.34a.57.57,0,0,0,.57-.57.637.637,0,0,0-.57-.57H2.25Z"
    //             transform="translate(8.805 18.495)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-4"
    //             data-name="Vector"
    //             d="M5.955,5.625H1.125A1.133,1.133,0,0,1,0,4.5V1.125A1.133,1.133,0,0,1,1.125,0h4.83a2.952,2.952,0,0,1,3.06,2.82A2.931,2.931,0,0,1,5.955,5.625Zm-3.69-2.25H5.97c.48,0,.81-.3.81-.57s-.33-.57-.81-.57H2.265Z"
    //             transform="translate(8.79 21.87)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-5"
    //             data-name="Vector"
    //             d="M1.125,3.945A1.133,1.133,0,0,1,0,2.82v-1.7A1.133,1.133,0,0,1,1.125,0,1.133,1.133,0,0,1,2.25,1.125v1.7A1.123,1.123,0,0,1,1.125,3.945Z"
    //             transform="translate(11.505 25.23)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-6"
    //             data-name="Vector"
    //             d="M1.125,3.945A1.133,1.133,0,0,1,0,2.82v-1.7A1.133,1.133,0,0,1,1.125,0,1.133,1.133,0,0,1,2.25,1.125v1.7A1.123,1.123,0,0,1,1.125,3.945Z"
    //             transform="translate(11.505 16.785)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-7"
    //             data-name="Vector"
    //             d="M10.38,20.76A10.38,10.38,0,0,1,10.38,0c.27,0,.51.015.78.03a10.439,10.439,0,0,1,9.57,9.555c.015.33.03.555.03.8A10.383,10.383,0,0,1,10.38,20.76Zm0-18.525a8.13,8.13,0,1,0,8.145,8.13c0-.195-.015-.39-.03-.585A8.179,8.179,0,0,0,11.01,2.25C10.815,2.25,10.6,2.235,10.38,2.235Z"
    //             transform="translate(2.625 12.615)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-8"
    //             data-name="Vector"
    //             d="M10.38,20.76H9.645A1.128,1.128,0,0,1,8.52,19.725,8.161,8.161,0,0,0,1.035,12.24,1.128,1.128,0,0,1,0,11.115V10.38A10.388,10.388,0,1,1,10.38,20.76ZM2.235,10.125A10.465,10.465,0,0,1,10.62,18.51a8.132,8.132,0,1,0-8.385-8.385Z"
    //             transform="translate(12.615 2.64)"
    //             fill="#a066dc"
    //           />
    //           <path id="Vector-9" data-name="Vector" d="M0,0H36V36H0Z" className="#a066dc" opacity="0" />
    //         </g>
    //       </g>
    //     </svg>
    //   </div>
    //   <div className="customAtom bg-white" style={{ left: "18%", top: "-3px" }}>
    //     <svg id="teacher" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    //       <path
    //         id="Vector"
    //         d="M15.285,23.627a6.712,6.712,0,0,1-3.57-.975l-9.03-5.9a5.905,5.905,0,0,1,0-9.9L11.73.977a6.966,6.966,0,0,1,7.14.015l8.985,5.9a5.9,5.9,0,0,1,0,9.87l-8.985,5.9A6.6,6.6,0,0,1,15.285,23.627Zm0-21.375a4.206,4.206,0,0,0-2.325.615L3.93,8.747a3.644,3.644,0,0,0,0,6.12l9.03,5.9a4.81,4.81,0,0,0,4.68,0l8.985-5.9a3.662,3.662,0,0,0,0-6.12l-8.985-5.9A4.577,4.577,0,0,0,15.285,2.252Z"
    //         transform="translate(2.73 1.873)"
    //         fill="#a066dc"
    //       />
    //       <path
    //         id="Vector-2"
    //         data-name="Vector"
    //         d="M10.7,15.63a6.154,6.154,0,0,1-1.875-.27L4.035,13.77A6.2,6.2,0,0,1,0,8.16L.015,1.125A1.133,1.133,0,0,1,1.14,0,1.133,1.133,0,0,1,2.265,1.125L2.25,8.16a4.035,4.035,0,0,0,2.5,3.48L9.54,13.23a4.634,4.634,0,0,0,2.31,0l4.785-1.59a4.032,4.032,0,0,0,2.5-3.465V1.215a1.125,1.125,0,0,1,2.25,0v6.96a6.238,6.238,0,0,1-4.035,5.61l-4.785,1.59A6.667,6.667,0,0,1,10.7,15.63Z"
    //         transform="translate(7.305 18.495)"
    //         fill="#a066dc"
    //       />
    //       <path
    //         id="Vector-3"
    //         data-name="Vector"
    //         d="M1.125,11.25A1.133,1.133,0,0,1,0,10.125v-9A1.133,1.133,0,0,1,1.125,0,1.133,1.133,0,0,1,2.25,1.125v9A1.133,1.133,0,0,1,1.125,11.25Z"
    //         transform="translate(30.975 12.375)"
    //         fill="#a066dc"
    //       />
    //       <path id="Vector-4" data-name="Vector" d="M0,0H36V36H0Z" fill="none" opacity="0" />
    //     </svg>
    //   </div>
    //   <svg
    //     width="40"
    //     height="40"
    //     viewBox="0 0 40 40"
    //     className="position-absolute"
    //     style={{ left: "49%", top: "-18px" }}
    //   >
    //     <defs>
    //       <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
    //         <stop offset="0" stopColor="#aa79f0" />
    //         <stop offset="1" stopColor="#944ec2" />
    //       </linearGradient>
    //     </defs>
    //     <circle id="Ellipse_71" data-name="Ellipse 71" cx="20" cy="20" r="20" fill="url(#linear-gradient)" />
    //   </svg>
    //   <svg
    //     width="26"
    //     height="26"
    //     viewBox="0 0 26 26"
    //     className="position-absolute translate-middle"
    //     style={{ left: "4px", top: "46%" }}
    //   >
    //     <defs>
    //       <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
    //         <stop offset="0" stopColor="#aa79f0" />
    //         <stop offset="1" stopColor="#944ec2" />
    //       </linearGradient>
    //     </defs>
    //     <circle id="Ellipse_70" data-name="Ellipse 70" cx="13" cy="13" r="13" fill="url(#linear-gradient)" />
    //   </svg>
    //   <div className="customAtom bg-white" style={{ right: "-7%", bottom: "35%" }}>
    //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    //       <g id="vuesax_outline_scan-barcode" data-name="vuesax/outline/scan-barcode" transform="translate(-428 -252)">
    //         <g id="scan-barcode" transform="translate(428 252)">
    //           <path
    //             id="Vector"
    //             d="M1.125,12.75A1.133,1.133,0,0,1,0,11.625V7.875A7.884,7.884,0,0,1,7.875,0h3.75A1.133,1.133,0,0,1,12.75,1.125,1.133,1.133,0,0,1,11.625,2.25H7.875A5.627,5.627,0,0,0,2.25,7.875v3.75A1.133,1.133,0,0,1,1.125,12.75Z"
    //             transform="translate(1.875 1.875)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-2"
    //             data-name="Vector"
    //             d="M11.625,12.75A1.133,1.133,0,0,1,10.5,11.625V7.875A5.627,5.627,0,0,0,4.875,2.25H1.125A1.133,1.133,0,0,1,0,1.125,1.133,1.133,0,0,1,1.125,0h3.75A7.884,7.884,0,0,1,12.75,7.875v3.75A1.133,1.133,0,0,1,11.625,12.75Z"
    //             transform="translate(21.375 1.875)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-3"
    //             data-name="Vector"
    //             d="M3.375,11.25H1.125a1.125,1.125,0,1,1,0-2.25h2.25A5.627,5.627,0,0,0,9,3.375V1.125a1.125,1.125,0,1,1,2.25,0v2.25A7.884,7.884,0,0,1,3.375,11.25Z"
    //             transform="translate(22.875 22.875)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-4"
    //             data-name="Vector"
    //             d="M11.625,12.75H7.875A7.884,7.884,0,0,1,0,4.875V1.125A1.133,1.133,0,0,1,1.125,0,1.133,1.133,0,0,1,2.25,1.125v3.75A5.627,5.627,0,0,0,7.875,10.5h3.75a1.125,1.125,0,0,1,0,2.25Z"
    //             transform="translate(1.875 21.375)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-5"
    //             data-name="Vector"
    //             d="M6.375,9.75h-3A3.1,3.1,0,0,1,0,6.375v-3A3.1,3.1,0,0,1,3.375,0h3A3.1,3.1,0,0,1,9.75,3.375v3A3.1,3.1,0,0,1,6.375,9.75Zm-3-7.5c-.885,0-1.125.24-1.125,1.125v3c0,.885.24,1.125,1.125,1.125h3C7.26,7.5,7.5,7.26,7.5,6.375v-3c0-.885-.24-1.125-1.125-1.125Z"
    //             transform="translate(7.125 7.125)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-6"
    //             data-name="Vector"
    //             d="M6.375,9.75h-3A3.1,3.1,0,0,1,0,6.375v-3A3.1,3.1,0,0,1,3.375,0h3A3.1,3.1,0,0,1,9.75,3.375v3A3.1,3.1,0,0,1,6.375,9.75Zm-3-7.5c-.885,0-1.125.24-1.125,1.125v3c0,.885.24,1.125,1.125,1.125h3C7.26,7.5,7.5,7.26,7.5,6.375v-3c0-.885-.24-1.125-1.125-1.125Z"
    //             transform="translate(19.125 7.125)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-7"
    //             data-name="Vector"
    //             d="M6.375,9.75h-3A3.1,3.1,0,0,1,0,6.375v-3A3.1,3.1,0,0,1,3.375,0h3A3.1,3.1,0,0,1,9.75,3.375v3A3.1,3.1,0,0,1,6.375,9.75Zm-3-7.5c-.885,0-1.125.24-1.125,1.125v3c0,.885.24,1.125,1.125,1.125h3C7.26,7.5,7.5,7.26,7.5,6.375v-3c0-.885-.24-1.125-1.125-1.125Z"
    //             transform="translate(7.125 19.125)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-8"
    //             data-name="Vector"
    //             d="M6.375,9.75h-3A3.1,3.1,0,0,1,0,6.375v-3A3.1,3.1,0,0,1,3.375,0h3A3.1,3.1,0,0,1,9.75,3.375v3A3.1,3.1,0,0,1,6.375,9.75Zm-3-7.5c-.885,0-1.125.24-1.125,1.125v3c0,.885.24,1.125,1.125,1.125h3C7.26,7.5,7.5,7.26,7.5,6.375v-3c0-.885-.24-1.125-1.125-1.125Z"
    //             transform="translate(19.125 19.125)"
    //             fill="#a066dc"
    //           />
    //           <path id="Vector-9" data-name="Vector" d="M0,0H36V36H0Z" fill="none" opacity="0" />
    //         </g>
    //       </g>
    //     </svg>
    //   </div>
    //   <div className="customAtom bg-white" style={{ right: "27%", bottom: "63%" }}>
    //     <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
    //       <g id="vuesax_outline_bubble" data-name="vuesax/outline/bubble" transform="translate(-172 -636)">
    //         <g id="bubble" transform="translate(172 636)">
    //           <path
    //             id="Vector"
    //             d="M8.82,17.64a8.82,8.82,0,1,1,8.82-8.82A8.834,8.834,0,0,1,8.82,17.64Zm0-15.39a6.57,6.57,0,1,0,6.57,6.57A6.578,6.578,0,0,0,8.82,2.25Z"
    //             transform="translate(14.565 1.875)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-2"
    //             data-name="Vector"
    //             d="M5.745,11.49A5.745,5.745,0,1,1,11.49,5.745,5.755,5.755,0,0,1,5.745,11.49Zm0-9.24a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,5.745,2.25Z"
    //             transform="translate(3.795 18.795)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-3"
    //             data-name="Vector"
    //             d="M4.965,9.93A4.965,4.965,0,1,1,9.93,4.965,4.971,4.971,0,0,1,4.965,9.93Zm0-7.7A2.715,2.715,0,1,0,7.68,4.95,2.714,2.714,0,0,0,4.965,2.235Z"
    //             transform="translate(19.965 24.195)"
    //             fill="#a066dc"
    //           />
    //           <path id="Vector-4" data-name="Vector" d="M0,0H36V36H0Z" fill="none" opacity="0" />
    //           <path id="Vector-5" data-name="Vector" d="M0,0H36V36H0Z" fill="none" opacity="0" />
    //         </g>
    //       </g>
    //     </svg>
    //   </div>
    //   <div className="customAtom bg-white" style={{ left: "17%", top: "36%" }}>
    //     <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
    //       <g
    //         id="vuesax_outline_format-square"
    //         data-name="vuesax/outline/format-square"
    //         transform="translate(-236 -380)"
    //       >
    //         <g id="format-square" transform="translate(236 380)">
    //           <path
    //             id="Vector"
    //             d="M20.7,26.25H5.55a1.166,1.166,0,0,1-.87-.405,1.1,1.1,0,0,1-.24-.93,3.306,3.306,0,0,0,.06-.54A2.638,2.638,0,0,0,1.875,21.75a2.13,2.13,0,0,0-.54.06,1.15,1.15,0,0,1-.93-.24A1.119,1.119,0,0,1,0,20.7V5.55a1.166,1.166,0,0,1,.4-.87,1.086,1.086,0,0,1,.93-.24,2.13,2.13,0,0,0,.54.06A2.638,2.638,0,0,0,4.5,1.875a2.13,2.13,0,0,0-.06-.54A1.15,1.15,0,0,1,4.68.4,1.119,1.119,0,0,1,5.55,0H20.7a1.166,1.166,0,0,1,.87.4,1.1,1.1,0,0,1,.24.93,3.306,3.306,0,0,0-.06.54A2.638,2.638,0,0,0,24.375,4.5a2.13,2.13,0,0,0,.54-.06,1.15,1.15,0,0,1,.93.24,1.119,1.119,0,0,1,.405.87V20.7a1.166,1.166,0,0,1-.405.87,1.1,1.1,0,0,1-.93.24,3.306,3.306,0,0,0-.54-.06,2.638,2.638,0,0,0-2.625,2.625,2.13,2.13,0,0,0,.06.54A1.124,1.124,0,0,1,20.7,26.25ZM6.735,24h12.78A4.885,4.885,0,0,1,24,19.515V6.735A4.885,4.885,0,0,1,19.515,2.25H6.735A4.885,4.885,0,0,1,2.25,6.735v12.78A4.885,4.885,0,0,1,6.735,24Z"
    //             transform="translate(4.875 4.875)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-2"
    //             data-name="Vector"
    //             d="M4.875,9.75a5.08,5.08,0,0,1-.96-.09A4.878,4.878,0,1,1,9.66,3.9a5.36,5.36,0,0,1,.09.975A4.884,4.884,0,0,1,4.875,9.75Zm0-7.5A2.621,2.621,0,0,0,4.35,7.44a1.941,1.941,0,0,0,.525.06A2.638,2.638,0,0,0,7.5,4.875a2.13,2.13,0,0,0-.06-.54A2.621,2.621,0,0,0,4.875,2.25Z"
    //             transform="translate(1.875 1.875)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-3"
    //             data-name="Vector"
    //             d="M4.875,9.75A4.884,4.884,0,0,1,0,4.875a5.08,5.08,0,0,1,.09-.96A4.878,4.878,0,1,1,5.85,9.66,5.36,5.36,0,0,1,4.875,9.75Zm0-7.5A2.619,2.619,0,0,0,2.31,4.35a2.959,2.959,0,0,0-.06.525A2.638,2.638,0,0,0,4.875,7.5a2.13,2.13,0,0,0,.54-.06,2.623,2.623,0,0,0-.54-5.19Z"
    //             transform="translate(24.375 1.875)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-4"
    //             data-name="Vector"
    //             d="M4.875,9.75A4.88,4.88,0,0,1,3.9.09,5.239,5.239,0,0,1,4.875,0,4.884,4.884,0,0,1,9.75,4.875a5.08,5.08,0,0,1-.09.96A4.894,4.894,0,0,1,4.875,9.75Zm0-7.5a2.13,2.13,0,0,0-.54.06A2.623,2.623,0,1,0,7.44,5.4a2.959,2.959,0,0,0,.06-.525A2.638,2.638,0,0,0,4.875,2.25Z"
    //             transform="translate(1.875 24.375)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-5"
    //             data-name="Vector"
    //             d="M4.875,9.75A4.9,4.9,0,0,1,.09,5.85,5.239,5.239,0,0,1,0,4.875,4.884,4.884,0,0,1,4.875,0a5.08,5.08,0,0,1,.96.09,4.878,4.878,0,0,1-.96,9.66Zm0-7.5A2.638,2.638,0,0,0,2.25,4.875a2.13,2.13,0,0,0,.06.54A2.623,2.623,0,1,0,5.4,2.31,1.941,1.941,0,0,0,4.875,2.25Z"
    //             transform="translate(24.375 24.375)"
    //             fill="#a066dc"
    //           />
    //           <path id="Vector-6" data-name="Vector" d="M0,0H36V36H0Z" fill="none" opacity="0" />
    //         </g>
    //       </g>
    //     </svg>
    //   </div>
    //   <div className="customAtom bg-white" style={{ right: "26%", bottom: "24%" }}>
    //     <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
    //       <g id="vuesax_outline_wallet-money" data-name="vuesax/outline/wallet-money" transform="translate(-108 -380)">
    //         <g id="wallet-money" transform="translate(108 380)">
    //           <path
    //             id="Vector"
    //             d="M6.495,9.975C2.925,9.975,0,7.38,0,4.185V1.125A1.133,1.133,0,0,1,1.125,0,1.133,1.133,0,0,1,2.25,1.125C2.25,3,4.065,4.41,6.495,4.41S10.74,3,10.74,1.125a1.125,1.125,0,0,1,2.25,0v3.06C12.99,7.38,10.08,9.975,6.495,9.975ZM2.64,5.655a4.323,4.323,0,0,0,3.855,2.07,4.353,4.353,0,0,0,3.855-2.07,7.413,7.413,0,0,1-3.855,1.02A7.413,7.413,0,0,1,2.64,5.655Z"
    //             transform="translate(4.26 24.15)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-2"
    //             data-name="Vector"
    //             d="M6.495,11.274a6.686,6.686,0,0,1-5.76-2.91A5.022,5.022,0,0,1,0,5.739,5.443,5.443,0,0,1,1.95,1.6a7.241,7.241,0,0,1,9.06-.015,5.512,5.512,0,0,1,1.965,4.155,5.022,5.022,0,0,1-.735,2.625A6.641,6.641,0,0,1,6.495,11.274Zm0-9.075a4.63,4.63,0,0,0-3.06,1.095A3.225,3.225,0,0,0,2.25,5.739a2.766,2.766,0,0,0,.4,1.455,4.409,4.409,0,0,0,3.84,1.845,4.389,4.389,0,0,0,3.825-1.83,2.728,2.728,0,0,0,.405-1.455A3.278,3.278,0,0,0,9.54,3.294,4.562,4.562,0,0,0,6.495,2.2Z"
    //             transform="translate(4.26 15.426)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-3"
    //             data-name="Vector"
    //             d="M6.495,15.45C2.79,15.45,0,13.065,0,9.915V5.79C0,2.595,2.91,0,6.495,0a6.934,6.934,0,0,1,4.53,1.635A5.512,5.512,0,0,1,12.99,5.79V9.915C12.99,13.065,10.2,15.45,6.495,15.45Zm0-13.2c-2.34,0-4.245,1.59-4.245,3.54V9.915c0,1.875,1.815,3.285,4.245,3.285s4.245-1.41,4.245-3.285V5.79A3.278,3.278,0,0,0,9.555,3.33,4.7,4.7,0,0,0,6.495,2.25Z"
    //             transform="translate(4.26 15.375)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-4"
    //             data-name="Vector"
    //             d="M4.384,8.4A4.318,4.318,0,0,1,.019,4.56a4.117,4.117,0,0,1,1.23-3.345A4.065,4.065,0,0,1,4.189,0H7.324A2.663,2.663,0,0,1,9.949,2.655v3.09A2.654,2.654,0,0,1,7.369,8.4ZM7.279,2.25H4.2a1.844,1.844,0,0,0-1.35.555,1.889,1.889,0,0,0-.585,1.56A2.079,2.079,0,0,0,4.384,6.15h2.94a.4.4,0,0,0,.375-.4V2.655A.416.416,0,0,0,7.279,2.25Z"
    //             transform="translate(24.176 13.8)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-5"
    //             data-name="Vector"
    //             d="M22.14,27.75H18.39a1.125,1.125,0,0,1,0-2.25h3.75a5.977,5.977,0,0,0,6.375-6.375v-1.05H26.7a4.318,4.318,0,0,1-4.365-3.84,4.117,4.117,0,0,1,1.23-3.345A4.065,4.065,0,0,1,26.5,9.675h2V8.625c0-3.51-2.055-5.925-5.385-6.315a5.739,5.739,0,0,0-.99-.06H8.625a8.046,8.046,0,0,0-1.05.075c-3.3.42-5.325,2.82-5.325,6.3v3A1.133,1.133,0,0,1,1.125,12.75,1.133,1.133,0,0,1,0,11.625v-3C0,4.005,2.85.66,7.275.105A9.309,9.309,0,0,1,8.625,0h13.5a8.537,8.537,0,0,1,1.3.09c4.425.51,7.32,3.87,7.32,8.535V10.8a1.133,1.133,0,0,1-1.125,1.125H26.5a1.844,1.844,0,0,0-1.35.555,1.889,1.889,0,0,0-.585,1.56,2.079,2.079,0,0,0,2.115,1.785H29.64a1.133,1.133,0,0,1,1.125,1.125v2.175C30.765,24.285,27.3,27.75,22.14,27.75Z"
    //             transform="translate(1.86 4.125)"
    //             fill="#a066dc"
    //           />
    //           <path
    //             id="Vector-6"
    //             data-name="Vector"
    //             d="M0,0H36V36H0Z"
    //             transform="translate(36 36) rotate(180)"
    //             fill="none"
    //             opacity="0"
    //           />
    //         </g>
    //       </g>
    //     </svg>
    //   </div>
    // </div>
  );
};

export default Ecosystem;
