import Bloomberg from "../../assets/images/Bloomberg.png";
import Coindesk from "../../assets/images/Coindesk.png";
import Forbes from "../../assets/images/Forbes.png";
import YahooFinance from "../../assets/images/Yahoo-Finance.png";
import Wired from "../../assets/images/Wired.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Ecosystem from "./Ecosystem";
import { useState } from "react";
import AnimatedImage from "../../shared/components/AnimatedImage";
import "swiper/css";

const Featured = () => {
  const [activeFeaturedImage, setActiveFeaturedImage] = useState(null);

  return (
    <>
      {/* <section className="spacing-between-section">
        <h2 className="fs-2xl text-capitalize text-secondary text-center fw-bold featured-heading">featured in</h2>
        <Swiper
          className="d-block d-md-none"
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={1}
        >
          <SwiperSlide className="feature-slide-item">
            <svg className="w-100" height="50" viewBox="0 0 248.065 50">
              <g id="Bloomberg" transform="translate(0)">
                <path
                  id="Path_390"
                  data-name="Path 390"
                  d="M6.53,6.642h5.391c4.927,0,7.1,1.557,7.1,4.72,0,2.749-2.171,4.615-6.53,4.615H6.53ZM0,37.74H13.213c6.944,0,13.888-2.481,13.888-10.466a8.727,8.727,0,0,0-7.921-8.867V18.3c3.773-1.13,6.375-3.878,6.375-8.026,0-6.688-5.708-9.225-11.254-9.225H0ZM6.53,21.571H12.8c5.285,0,7.782,1.349,7.782,5.188,0,4.813-4.675,5.387-8.042,5.387H6.53Z"
                  transform="translate(0 -0.181)"
                  fill="#010101"
                />
                <line
                  id="Line_8"
                  data-name="Line 8"
                  y1="37.559"
                  transform="translate(34.486)"
                  fill="none"
                  stroke="#010101"
                  stroke-miterlimit="10"
                  stroke-width="7.5"
                />
                <path
                  id="Path_391"
                  data-name="Path 391"
                  d="M56.709,27.647a7.308,7.308,0,1,1,14.612,0,7.308,7.308,0,1,1-14.612,0m-6.221,0c0,7.826,6.009,13.055,13.531,13.055S77.55,35.474,77.55,27.647,71.533,14.584,64.019,14.584,50.488,19.821,50.488,27.647"
                  transform="translate(-8.741 -2.525)"
                  fill="#010101"
                />
                <path
                  id="Path_392"
                  data-name="Path 392"
                  d="M92.829,27.647a7.308,7.308,0,1,1,14.612,0,7.308,7.308,0,1,1-14.612,0m-6.221,0c0,7.826,6.01,13.055,13.531,13.055s13.531-5.228,13.531-13.055-6.017-13.063-13.531-13.063S86.608,19.821,86.608,27.647"
                  transform="translate(-14.994 -2.525)"
                  fill="#010101"
                />
                <path
                  id="Path_393"
                  data-name="Path 393"
                  d="M123.918,15.2h5.911V19.1h.1a7.911,7.911,0,0,1,7.619-4.517c3.838,0,6.489,1.5,7.782,4.615a8.666,8.666,0,0,1,8.18-4.615c6.635,0,8.97,4.724,8.97,10.685v14.82h-6.221v-14.1c0-3.107-.927-5.8-4.611-5.8-3.886,0-5.342,3.212-5.342,6.42V40.083h-6.212V25.263c0-3.066-1.244-5.078-4.253-5.078-4.091,0-5.7,3-5.7,6.318v13.58h-6.221V15.2Z"
                  transform="translate(-21.454 -2.524)"
                  fill="#010101"
                />
                <path
                  id="Path_394"
                  data-name="Path 394"
                  d="M197.277,25.122a7.312,7.312,0,1,1-14.621,0,7.312,7.312,0,1,1,14.621,0m-20.63,12.437h5.911V33.83h.1c1.821,3,5.082,4.347,8.561,4.347,7.66,0,12.279-5.7,12.279-13.055s-4.927-13.063-12.026-13.063a10.207,10.207,0,0,0-8.449,3.79h-.155V0h-6.221V37.559Z"
                  transform="translate(-30.583)"
                  fill="#010101"
                />
                <path
                  id="Path_395"
                  data-name="Path 395"
                  d="M218.743,25.159c.464-3.582,2.749-5.911,6.424-5.911,3.887,0,6.269,2.281,6.326,5.911Zm18.971,4.664V28.115c0-8.66-4.716-13.531-11.661-13.531-7.529,0-13.531,5.237-13.531,13.063s6,13.055,13.531,13.055a12.956,12.956,0,0,0,10.514-4.969l-4.456-3.362a8.2,8.2,0,0,1-6.684,3.362,6.441,6.441,0,0,1-6.684-5.911Z"
                  transform="translate(-36.794 -2.525)"
                  fill="#010101"
                />
                <path
                  id="Path_396"
                  data-name="Path 396"
                  d="M247.885,15.2h6.221v3.94h.106a7.937,7.937,0,0,1,9.586-4.2v6.01a12.6,12.6,0,0,0-3.009-.464,6.257,6.257,0,0,0-6.684,6.278V40.084h-6.221V15.2Z"
                  transform="translate(-42.916 -2.524)"
                  fill="#010101"
                />
                <path
                  id="Path_397"
                  data-name="Path 397"
                  d="M281.114,20.185c4.5,0,7.358,3,7.358,7.31a6.988,6.988,0,0,1-7.408,7.3,7.183,7.183,0,0,1-7.31-7.2,7.024,7.024,0,0,1,7.36-7.407m7.358-4.98v3.732h-.1c-1.821-3.009-5.089-4.358-8.561-4.358-7.668,0-12.279,5.7-12.279,13.067,0,7.042,4.927,12.746,12.385,12.746a10.152,10.152,0,0,0,8.148-3.623h.088v1.817c0,4.919-1.854,8.343-7.871,8.343a11.971,11.971,0,0,1-8.555-3.594l-3.724,5.089c3.513,3.122,7.716,4.1,12.335,4.1,9.693,0,14.043-5.708,14.043-14.67V15.2Z"
                  transform="translate(-46.318 -2.524)"
                  fill="#010101"
                />
              </g>
            </svg>
          </SwiperSlide>
          <SwiperSlide className="feature-slide-item">
            <svg className="w-100" height="50" viewBox="0 0 245.045 50">
              <g id="Wired" transform="translate(0)">
                <rect
                  id="Rectangle_77"
                  data-name="Rectangle 77"
                  width="49.099"
                  height="50"
                  transform="translate(195.946)"
                  fill="#231f20"
                />
                <rect
                  id="Rectangle_78"
                  data-name="Rectangle 78"
                  width="49.099"
                  height="50"
                  transform="translate(98.198)"
                  fill="#231f20"
                />
                <rect
                  id="Rectangle_79"
                  data-name="Rectangle 79"
                  width="49.099"
                  height="50"
                  transform="translate(0)"
                  fill="#231f20"
                />
                <path
                  id="Path_385"
                  data-name="Path 385"
                  d="M262.971,382.7V377H239.25v5.7h8.261v22.523H239.25v5.7h23.721v-5.7h-9.009V382.7Z"
                  transform="translate(-176.863 -369.117)"
                  fill="#231f20"
                />
                <path
                  id="Path_386"
                  data-name="Path 386"
                  d="M314.32,395.4s5.108-.45,5.108-9.613-8.405-8.712-8.405-8.712H291.5V410.71h6.6V397.647s6.757-.153,10.658-.153,3.9,5.7,3.9,5.7v7.36h6.757v-7.811C319.428,395.7,314.32,395.4,314.32,395.4Zm-6.9-3.306c-4.207,0-9.306.153-9.306.153v-9.306h9.459s5.108-.748,5.108,4.054C312.671,391.2,311.617,392.1,307.419,392.1Z"
                  transform="translate(-182.041 -369.125)"
                  fill="#fff"
                />
                <path
                  id="Path_387"
                  data-name="Path 387"
                  d="M343.5,377.08v5.559h4.658v22.676H343.5v5.55h28.676V399.909h-5.7v5.405H354.311v-9.162h9.009v-5.559h-9.009v-7.955h11.712v5.405h6.153V377.08Z"
                  transform="translate(-187.194 -369.125)"
                  fill="#231f20"
                />
                <path
                  id="Path_388"
                  data-name="Path 388"
                  d="M429.246,398.567v-9.459c0-13.514-15.018-11.865-15.018-11.865H399.66v34.081s5.559-.153,17.865-.153C429.849,411.18,429.246,398.567,429.246,398.567Zm-6.757.144s-.153,6.6-5.252,6.6H406.579V382.793h10.207s5.7-.45,5.7,7.207Z"
                  transform="translate(-192.759 -369.135)"
                  fill="#fff"
                />
                <path
                  id="Path_389"
                  data-name="Path 389"
                  d="M174.67,377.25h6.757l4.649,25.676,6.009-25.676,7.36.153,6,25.973,4.5-26.126h6.459l-6.91,33.631h-8.405l-5.405-24.468-5.856,24.622h-8.261Z"
                  transform="translate(-170.463 -369.142)"
                  fill="#fff"
                />
              </g>
            </svg>
          </SwiperSlide>
          <SwiperSlide className="feature-slide-item">
            <svg id="Yahoo_Finance" data-name="Yahoo Finance" width="132.813" height="30" viewBox="0 0 132.813 50">
              <g id="Finance" transform="translate(48.522 32.673)">
                <path
                  id="path32"
                  d="M-158.829,29.421a1.465,1.465,0,0,1,1.646-1.559,2.633,2.633,0,0,1,1.207.275V24.676a4.49,4.49,0,0,0-1.931-.39c-3.094,0-4.915,1.9-4.915,5.042v.3h-1.47V33h1.47v8.091h3.994V33h2.7V29.627h-2.7Z"
                  transform="translate(164.293 -24.08)"
                  fill="#232a31"
                />
                <path
                  id="path34"
                  d="M-141.064,40.882V29.422h-4.016v11.46Zm.241-14.691a2.3,2.3,0,0,0-2.26-2.315,2.294,2.294,0,0,0-2.238,2.315,2.294,2.294,0,0,0,2.238,2.315A2.3,2.3,0,0,0-140.822,26.191Z"
                  transform="translate(154.844 -23.876)"
                  fill="#232a31"
                />
                <path
                  id="path36"
                  d="M-129.56,39.97c0-1.192.571-1.856,1.448-1.856s1.4.642,1.4,1.811v6.142h4.016V38.778c0-2.773-1.448-4.492-3.818-4.492A3.313,3.313,0,0,0-129.56,36v-1.4h-4.016v11.46h4.016Z"
                  transform="translate(148.995 -29.06)"
                  fill="#232a31"
                />
                <path
                  id="path38"
                  d="M-104.216,34.468c-3.319,0-5.448,3-5.448,6,0,3.346,2.335,6,5.4,6a3.666,3.666,0,0,0,3.159-1.4v1.1h3.868V34.744H-101.1v1.031A3.959,3.959,0,0,0-104.216,34.468Zm.824,3.69a2.264,2.264,0,0,1,2.335,2.315,2.291,2.291,0,0,1-2.335,2.361,2.356,2.356,0,0,1-2.335-2.315A2.254,2.254,0,0,1-103.392,38.159Z"
                  transform="translate(137.086 -29.151)"
                  fill="#232a31"
                />
                <path
                  id="path40"
                  d="M-77.1,39.97c0-1.192.571-1.856,1.448-1.856s1.4.642,1.4,1.811v6.142h4.016V38.778c0-2.773-1.448-4.492-3.818-4.492A3.313,3.313,0,0,0-77.1,36v-1.4h-4.016v11.46H-77.1Z"
                  transform="translate(122.87 -29.06)"
                  fill="#232a31"
                />
                <path
                  id="path42"
                  d="M-57.076,40.337a5.691,5.691,0,0,0,5.859,6.051,5.577,5.577,0,0,0,2.633-.642v-3.8a3.256,3.256,0,0,1-2,.688,2.266,2.266,0,0,1-2.436-2.292,2.266,2.266,0,0,1,2.436-2.292,3.453,3.453,0,0,1,2,.642v-3.8a5.873,5.873,0,0,0-2.567-.6,5.785,5.785,0,0,0-5.925,6.051Z"
                  transform="translate(110.896 -29.06)"
                  fill="#232a31"
                />
                <path
                  id="path44"
                  d="M-30.463,42.033a1.868,1.868,0,0,1-1.821,1.008,1.905,1.905,0,0,1-2.019-1.65h7.592a7.8,7.8,0,0,0,.044-.848c0-3.782-2.3-6.257-5.727-6.257a5.818,5.818,0,0,0-5.837,6.051,5.733,5.733,0,0,0,5.969,6.051,5.369,5.369,0,0,0,5.244-3.094Zm-3.818-3.048a1.748,1.748,0,0,1,1.865-1.49,1.714,1.714,0,0,1,1.865,1.49Z"
                  transform="translate(101.51 -29.06)"
                  fill="#232a31"
                />
              </g>
              <g id="Yahoo">
                <path
                  id="path1139"
                  d="M-260.955-23.352h7.9l4.6,11.771,4.661-11.771h7.693L-247.683,4.514h-7.742l3.171-7.384Z"
                  transform="translate(260.955 32.318)"
                  fill="#5f01d1"
                />
                <path
                  id="path1141"
                  d="M-205.085-24.285c-5.937,0-9.69,5.324-9.69,10.627,0,5.967,4.115,10.7,9.577,10.7,4.075,0,5.611-2.483,5.611-2.483V-3.51h6.892V-23.816h-6.892v1.846a6.926,6.926,0,0,0-5.5-2.315Zm1.466,6.526a4.05,4.05,0,0,1,4.153,4.123,4.067,4.067,0,0,1-4.153,4.173,4.169,4.169,0,0,1-4.163-4.083A4.022,4.022,0,0,1-203.619-17.76Z"
                  transform="translate(237.956 32.783)"
                  fill="#5f01d1"
                />
                <path
                  id="path1145"
                  d="M-166.06-11.941V-41.214h7.208v10.883a6.674,6.674,0,0,1,5.3-2.383c4.386,0,6.956,3.268,6.956,7.938v12.834h-7.155V-23.017c0-1.58-.753-3.107-2.458-3.107-1.736,0-2.64,1.55-2.64,3.107v11.076Z"
                  transform="translate(213.695 41.214)"
                  fill="#5f01d1"
                />
                <path
                  id="path1147"
                  d="M-113.567-24.28a10.5,10.5,0,0,0-10.847,10.709c0,6.3,4.9,10.612,10.873,10.612,5.788,0,10.852-4.114,10.852-10.507,0-7-5.3-10.814-10.878-10.814Zm.065,6.583a4.091,4.091,0,0,1,4.063,4.133A4.155,4.155,0,0,1-113.5-9.5a4.023,4.023,0,0,1-4.034-4.083A3.919,3.919,0,0,1-113.5-17.7Z"
                  transform="translate(192.954 32.78)"
                  fill="#5f01d1"
                />
                <path
                  id="path1153"
                  d="M-67.975-24.28A10.5,10.5,0,0,0-78.822-13.572c0,6.3,4.9,10.612,10.873,10.612,5.788,0,10.852-4.114,10.852-10.507,0-7-5.3-10.814-10.878-10.814Zm.065,6.583a4.091,4.091,0,0,1,4.063,4.133A4.155,4.155,0,0,1-67.91-9.5a4.023,4.023,0,0,1-4.034-4.083A3.919,3.919,0,0,1-67.91-17.7Z"
                  transform="translate(170.247 32.78)"
                  fill="#5f01d1"
                />
                <circle
                  id="path1155"
                  cx="4.787"
                  cy="4.787"
                  r="4.787"
                  transform="translate(114.052 20.13)"
                  fill="#5f01d1"
                />
                <path
                  id="path1157"
                  d="M-20.093-22.842H-28.71l7.648-18.372h8.585Z"
                  transform="translate(145.29 41.214)"
                  fill="#5f01d1"
                />
              </g>
            </svg>
          </SwiperSlide>
          <SwiperSlide className="feature-slide-item">
            <svg width="255.776" height="50" viewBox="0 0 255.776 50">
              <g id="Coindesk" transform="translate(0)">
                <path
                  id="Path_398"
                  data-name="Path 398"
                  d="M73.1,318.728a2.428,2.428,0,1,0,2.428-2.428,2.454,2.454,0,0,0-2.428,2.428m20.36-2.385a2.428,2.428,0,1,0,2.428,2.428,2.4,2.4,0,0,0-2.428-2.428m0,18.23A2.428,2.428,0,1,0,95.888,337a2.4,2.4,0,0,0-2.428-2.428"
                  transform="translate(-50.61 -293.725)"
                  fill="#f3bb2d"
                />
                <path
                  id="Path_399"
                  data-name="Path 399"
                  d="M68.3,265.97a6.416,6.416,0,0,0-9.328-.767l-.3.3-.6.468a6.258,6.258,0,0,1-8.306-.468v-.17a6.653,6.653,0,0,0-2.854-1.661c-.17,0-.469-.17-.6-.17H43.9a.544.544,0,0,0-.469.17h-.3c-.17,0-.3.17-.469.17a.167.167,0,0,0-.17.17c-.17,0-.3.17-.469.17a.167.167,0,0,0-.17.17c-.17.17-.3.17-.469.3a.167.167,0,0,0-.17.17c-.17.17-.3.17-.469.3l-.17.17-.3.3-.6.469a6.026,6.026,0,0,1-8.135-.469.167.167,0,0,1-.17-.17l-.3-.3a5.88,5.88,0,0,0-3.152-1.491H25.2c0,.17-.17.17-.3.3h-.043a6.216,6.216,0,0,0-2.13,1.193l-.17.17-.469.469a6.916,6.916,0,0,0-1.193,1.959c0,.17-.17.3-.17.469s-.17.3-.17.6a6.574,6.574,0,0,0,.17,3.152c0,.17.17.3.17.469v.17c0,.17.17.3.17.469.17.17.17.3.3.6a6.964,6.964,0,0,1,.767.6l.3.3.3.3a6.149,6.149,0,0,1-.17,8.6,4.95,4.95,0,0,0-.894,1.065c-.17.17-.17.3-.3.6v.17c-.17.17-.17.3-.3.469v.17c0,.17-.17.3-.17.469v.17a.544.544,0,0,1-.17.469v2.257a.544.544,0,0,0,.17.469v.17a6.964,6.964,0,0,0,1.789,3.024,6.144,6.144,0,0,1,0,8.732l-.17.17-.3.3v.17c-.17.17-.3.3-.3.469a.167.167,0,0,1-.17.17c-.17.17-.17.3-.3.469l-.17.17c0,.17-.17.17-.17.3s-.17.17-.17.3c0,.17,0,.17-.17.3a4.717,4.717,0,0,0-.469,1.959v1.193c.17.469.17.894.469,1.193a.436.436,0,0,0,.17.3.167.167,0,0,0,.17.17c0,.17.17.3.17.469a.167.167,0,0,0,.17.17,1.81,1.81,0,0,0,.469.6,1304.457,1304.457,0,0,1,.341.341.167.167,0,0,0,.17.17l.17.17c.17.17.3.17.3.3l.17.17a.167.167,0,0,1,.17.17c.17.17.3.3.469.3a.167.167,0,0,1,.17.17c.17.17.3.17.469.3h.085c.17.17.3.17.6.17.17,0,.469.17.6.17h.17a.544.544,0,0,1,.469.17h1.363c.469,0,.767-.17,1.193-.17h.17c.17,0,.3-.17.469-.17h.085c.17,0,.3-.17.469-.17h.17c.3-.17.767-.469,1.065-.6l.469-.469.17-.17a5.931,5.931,0,0,1,8.732,0,6.434,6.434,0,0,0,9.8-.469,6.644,6.644,0,0,0,0-8.008,6.416,6.416,0,0,0-9.328-.767l-.3.3-.6.469a6.258,6.258,0,0,1-8.306-.469l-.3-.3-.469-.6a6.258,6.258,0,0,1,.469-8.306,5.887,5.887,0,0,0,1.959-4.515v-.469a5.492,5.492,0,0,0-1.789-4.089c0-.17-.17-.17-.17-.3l-.469-.6a6.258,6.258,0,0,1,.469-8.306l.17-.17.17-.17a5.931,5.931,0,0,1,8.732,0l.17.17.17.17.3.3c.17,0,.17.17.3.17s.17.17.3.17.17.17.3.17.17.17.3.17.17.17.3.17.17.17.3.17.17,0,.3.17c.17,0,.17,0,.3.17H46.24a.544.544,0,0,0,.469-.17h.3c.17,0,.3-.17.469-.17h.17c.17,0,.3-.17.6-.3a7.848,7.848,0,0,0,1.661-1.193l.17-.17a5.931,5.931,0,0,1,8.732,0,6.208,6.208,0,0,0,9.669-.3,7.433,7.433,0,0,0-.17-8.348"
                  transform="translate(-20.3 -263.415)"
                  fill="#f3bb2d"
                />
                <path
                  id="Path_400"
                  data-name="Path 400"
                  d="M189.015,284.554a8.515,8.515,0,0,0-2.726-1.959,6.963,6.963,0,0,0-3.322-.767,7.488,7.488,0,0,0-3.322.767,5.856,5.856,0,0,0-2.257,1.959,7.807,7.807,0,0,0-1.363,2.726,11.777,11.777,0,0,0-.469,3.152,8.272,8.272,0,0,0,.6,3.152,7.227,7.227,0,0,0,1.491,2.556,6.45,6.45,0,0,0,2.428,1.789,6.732,6.732,0,0,0,3.152.6,6.962,6.962,0,0,0,3.322-.767A8.381,8.381,0,0,0,189.1,295.8l3.152,3.322a10.21,10.21,0,0,1-4.089,2.854,13.31,13.31,0,0,1-4.983.895,14.159,14.159,0,0,1-5.111-.895,11.354,11.354,0,0,1-6.474-6.474,15.051,15.051,0,0,1,0-10.223,14.646,14.646,0,0,1,2.556-4.089,11.785,11.785,0,0,1,3.919-2.556,14.159,14.159,0,0,1,5.111-.895,13.631,13.631,0,0,1,4.983.895,11.565,11.565,0,0,1,4.217,2.854l-3.365,3.067m10.223,5.58a8.118,8.118,0,0,0,.6,3.322,8.022,8.022,0,0,0,1.491,2.726,5.09,5.09,0,0,0,2.428,1.661,7.471,7.471,0,0,0,3.322.6,8.678,8.678,0,0,0,3.322-.6,11.583,11.583,0,0,0,2.428-1.661,8.022,8.022,0,0,0,1.491-2.726,12.072,12.072,0,0,0,.6-3.322,8.118,8.118,0,0,0-.6-3.322,8.022,8.022,0,0,0-1.491-2.726,5.09,5.09,0,0,0-2.428-1.661,7.472,7.472,0,0,0-3.322-.6,8.678,8.678,0,0,0-3.322.6,11.583,11.583,0,0,0-2.428,1.661,8.021,8.021,0,0,0-1.491,2.726A12.074,12.074,0,0,0,199.238,290.134Zm-4.813,0a13.631,13.631,0,0,1,.894-4.983,12.076,12.076,0,0,1,2.726-4.089,10.789,10.789,0,0,1,4.089-2.726,13.339,13.339,0,0,1,4.983-1.065,10.808,10.808,0,0,1,4.983,1.065,12.077,12.077,0,0,1,4.089,2.726,14.916,14.916,0,0,1,2.726,4.089,13.311,13.311,0,0,1,.894,4.983,13.631,13.631,0,0,1-.894,4.983,12.076,12.076,0,0,1-2.726,4.089A13.338,13.338,0,0,1,207.118,303a10.927,10.927,0,0,1-4.983-1.065,12.077,12.077,0,0,1-4.089-2.726,13.214,13.214,0,0,1-2.726-4.089A18.476,18.476,0,0,1,194.425,290.134Zm30.029,12.224h4.515V278.25h-4.515Zm-1.065-32.882a3.807,3.807,0,0,1,.894-2.428,3.241,3.241,0,0,1,2.257-1.065,2.684,2.684,0,0,1,2.257,1.065,3.418,3.418,0,0,1,.894,2.428,3.724,3.724,0,0,1-.894,2.428,3.241,3.241,0,0,1-2.257,1.065,2.684,2.684,0,0,1-2.257-1.065A3.566,3.566,0,0,1,223.389,269.476Zm11.884,8.732h4.558v3.748H240a5.89,5.89,0,0,1,3.024-3.152,10.029,10.029,0,0,1,4.983-1.193,8.678,8.678,0,0,1,3.322.6,6.222,6.222,0,0,1,2.726,1.661,10.51,10.51,0,0,1,1.959,2.854,11.294,11.294,0,0,1,.767,4.217v15.547h-4.6V288.175a8,8,0,0,0-.469-2.854,6.665,6.665,0,0,0-1.193-1.959,3.8,3.8,0,0,0-1.789-1.065,8.03,8.03,0,0,0-2.13-.3,7.17,7.17,0,0,0-2.556.469,5.406,5.406,0,0,0-2.13,1.491,5.846,5.846,0,0,0-1.363,2.556,13.328,13.328,0,0,0-.469,3.62v12.523H235.57V278.25m37.866,20.317a7.556,7.556,0,0,0,5.878-2.385,8.022,8.022,0,0,0,1.491-2.726,12.155,12.155,0,0,0,.6-3.45,9.186,9.186,0,0,0-.6-3.45,8.022,8.022,0,0,0-1.491-2.726,7.29,7.29,0,0,0-2.556-1.789,7.941,7.941,0,0,0-3.322-.6,7.557,7.557,0,0,0-5.878,2.385,8.022,8.022,0,0,0-1.491,2.726,12.155,12.155,0,0,0-.6,3.45,9.187,9.187,0,0,0,.6,3.45,8.023,8.023,0,0,0,1.491,2.726,6.013,6.013,0,0,0,2.556,1.789A11.008,11.008,0,0,0,273.436,298.568Zm12.523,3.621h-4.515v-3.45h-.17a8.988,8.988,0,0,1-3.621,3.024,10.46,10.46,0,0,1-4.813,1.065,14.159,14.159,0,0,1-5.111-.894,10.038,10.038,0,0,1-3.919-2.726,11.106,11.106,0,0,1-2.428-4.089,13.311,13.311,0,0,1-.894-4.983,14.667,14.667,0,0,1,.894-5.111,14.232,14.232,0,0,1,2.428-4.089,10.5,10.5,0,0,1,3.919-2.726,13.522,13.522,0,0,1,5.111-.894,10.461,10.461,0,0,1,4.813,1.065,8.326,8.326,0,0,1,3.45,3.024h.17V263.3h4.515v38.888ZM309,288.175a8.715,8.715,0,0,0-.469-2.854,5.735,5.735,0,0,0-1.363-2.257,9.536,9.536,0,0,0-2.13-1.491,8.863,8.863,0,0,0-3.024-.6,7.106,7.106,0,0,0-3.024.6,9.123,9.123,0,0,0-2.428,1.661,5.98,5.98,0,0,0-1.491,2.257,8.063,8.063,0,0,0-.6,2.428H308.96Zm-14.439,3.748a5.953,5.953,0,0,0,.767,2.854,7.244,7.244,0,0,0,1.789,2.257,8.712,8.712,0,0,0,2.556,1.363,10.648,10.648,0,0,0,3.024.469,6.246,6.246,0,0,0,3.748-1.065,10.645,10.645,0,0,0,2.854-2.556l3.45,2.726a12.8,12.8,0,0,1-10.691,4.983,13.522,13.522,0,0,1-5.111-.894,10.037,10.037,0,0,1-3.919-2.726,10.163,10.163,0,0,1-2.428-4.089,13.311,13.311,0,0,1-.894-4.983,13.631,13.631,0,0,1,.894-4.983,14.646,14.646,0,0,1,2.556-4.089,12.919,12.919,0,0,1,3.919-2.726,13.312,13.312,0,0,1,4.984-.894,11.687,11.687,0,0,1,5.409,1.065,10.189,10.189,0,0,1,3.62,2.854,13.335,13.335,0,0,1,2.13,4.089,15.377,15.377,0,0,1,.6,4.685v1.661Zm37.057-7.667a10.631,10.631,0,0,0-1.959-1.661,5.583,5.583,0,0,0-2.854-.767,5.953,5.953,0,0,0-2.854.767,2.165,2.165,0,0,0-1.193,1.959,1.9,1.9,0,0,0,.767,1.661,6.15,6.15,0,0,0,1.661,1.065,8.607,8.607,0,0,0,1.959.6,9.588,9.588,0,0,0,1.789.3,17.037,17.037,0,0,1,2.726.894,5.735,5.735,0,0,1,2.257,1.363,8.506,8.506,0,0,1,1.491,1.959,7.485,7.485,0,0,1,.6,2.854,6.2,6.2,0,0,1-.894,3.45,9.411,9.411,0,0,1-2.257,2.428,9.191,9.191,0,0,1-3.152,1.363,14.849,14.849,0,0,1-3.45.469,14.608,14.608,0,0,1-5.282-.895,9.513,9.513,0,0,1-4.089-3.322l3.45-2.854a13.585,13.585,0,0,0,2.428,1.959,5.859,5.859,0,0,0,3.322.895,6.377,6.377,0,0,0,1.789-.17,4.745,4.745,0,0,0,1.491-.6,5.876,5.876,0,0,0,1.065-.895,2.5,2.5,0,0,0,.469-1.363,2.422,2.422,0,0,0-.6-1.661,5.3,5.3,0,0,0-1.491-1.065,7.361,7.361,0,0,0-1.789-.6l-1.789-.469c-.894-.3-1.959-.469-2.726-.767a8.632,8.632,0,0,1-2.257-1.193A7.619,7.619,0,0,1,318.586,288a5.537,5.537,0,0,1-.6-2.854,7.488,7.488,0,0,1,.767-3.322,5.985,5.985,0,0,1,2.13-2.257,9.8,9.8,0,0,1,2.854-1.363,12.766,12.766,0,0,1,3.322-.469,12.553,12.553,0,0,1,4.685.895,7.824,7.824,0,0,1,3.62,3.024l-3.748,2.6m8.774-20.36h4.515V288.3l10.265-10.265h6.176L350.361,288.9l12.054,12.949h-6.474L344.951,289.5v12.352h-4.515V263.9"
                  transform="translate(-106.639 -263.3)"
                  fill="#101820"
                />
              </g>
            </svg>
          </SwiperSlide>
          <SwiperSlide className="feature-slide-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="165.028" height="41.351" viewBox="0 0 165.028 41.351">
              <g id="forbes-2" transform="translate(-22.958 9.708)">
                <path
                  id="Path_499"
                  data-name="Path 499"
                  d="M123.49,2.051a13.525,13.525,0,0,0-6.827,1.707c0-6.069,0-11.569.191-13.465l-12.71,2.275v1.138l1.328.189c1.705.379,2.277,1.326,2.653,3.6.382,4.552.191,28.831,0,32.815a49.329,49.329,0,0,0,10.624,1.329c10.053,0,16.123-6.26,16.123-16.124,0-7.776-4.931-13.467-11.381-13.467Zm-4.363,27.5a8.551,8.551,0,0,1-2.276-.188c-.191-2.655-.379-13.848-.191-23.71a8.389,8.389,0,0,1,2.846-.57c4.176,0,6.452,4.931,6.452,11,0,7.59-2.847,13.469-6.831,13.469ZM56.342-8.95H22.958v1.707l1.9.189c2.465.379,3.414,1.9,3.792,5.5a219.764,219.764,0,0,1,0,25.037c-.379,3.6-1.326,5.313-3.792,5.5l-1.9.381v1.517H44.392V29.364l-2.276-.381c-2.466-.188-3.414-1.895-3.793-5.5-.191-2.467-.38-6.451-.38-11.381l4.552.189c2.846,0,4.172,2.276,4.742,5.5h1.708V4.328H47.237c-.571,3.225-1.9,5.5-4.742,5.5l-4.551.191c0-6.45.189-12.519.38-16.123h6.638c5.123,0,7.778,3.224,9.674,8.915l1.9-.57L56.342-8.95Z"
                  fill="#393939"
                />
                <path
                  id="Path_500"
                  data-name="Path 500"
                  d="M64.6.69c9.485,0,14.227,6.45,14.227,14.985,0,8.156-5.311,14.987-14.8,14.987S49.8,24.21,49.8,15.674C49.8,7.518,55.11.69,64.6.69Zm-.57,1.9c-4.173,0-5.311,5.69-5.311,13.087,0,7.207,1.9,13.087,5.692,13.087,4.36,0,5.5-5.69,5.5-13.087C69.905,8.467,68.01,2.587,64.025,2.587Zm70.751,13.278c0-7.777,4.931-15.175,14.606-15.175,7.964,0,11.76,5.881,11.76,13.657H143.5c-.191,7.018,3.224,12.14,10.053,12.14A9.745,9.745,0,0,0,160,24.4l.757.947a14.209,14.209,0,0,1-11.38,5.313c-8.536,0-14.606-6.071-14.606-14.8Zm8.725-3.6,8.915-.191c0-3.793-.57-9.484-3.793-9.484S143.689,7.9,143.5,12.261ZM183.717,2.208A23.181,23.181,0,0,0,174.992.69c-7.017,0-11.382,4.172-11.382,9.1s3.221,7.018,7.779,8.536c4.741,1.705,6.069,3.034,6.069,5.31A4.393,4.393,0,0,1,172.716,28c-3.6,0-6.26-2.086-8.346-7.777l-1.329.381.191,8.346a29.973,29.973,0,0,0,10.053,1.708c7.4,0,12.141-3.8,12.141-9.674,0-3.984-2.088-6.259-7.019-8.157-5.313-2.086-7.208-3.413-7.208-5.88a3.941,3.941,0,0,1,3.986-4.173c3.412,0,5.688,2.087,7.4,7.209l1.326-.379-.194-7.4Zm-80.238-.759C100.256-.446,94.564.5,91.53,7.33L91.718.691,79.011,3.156V4.294l1.328.189c1.709.191,2.466,1.138,2.656,3.6a159.684,159.684,0,0,1,0,16.5c-.191,2.274-.947,3.412-2.656,3.6l-1.328.191V29.9h17.64V28.385l-2.276-.191c-1.9-.191-2.466-1.329-2.656-3.6A135.253,135.253,0,0,1,91.53,9.227c.947-1.329,5.121-2.466,8.914,0l3.035-7.778Z"
                  transform="translate(2.56 0.982)"
                  fill="#393939"
                />
              </g>
            </svg>
          </SwiperSlide>
        </Swiper>

        <div className="flex-md-row flex-column featured-images align-items-center d-none d-md-flex">
          <AnimatedImage
            src={Bloomberg}
            alt="blommberg"
            title="blommberg"
            currentActiveImage={activeFeaturedImage}
            handleActiveImage={setActiveFeaturedImage}
          />
          <AnimatedImage
            src={Wired}
            alt="wired"
            title="wired"
            currentActiveImage={activeFeaturedImage}
            handleActiveImage={setActiveFeaturedImage}
          />
          <AnimatedImage
            src={YahooFinance}
            alt="Yahoo Finance"
            title="Yahoo Finance"
            currentActiveImage={activeFeaturedImage}
            handleActiveImage={setActiveFeaturedImage}
          />
          <AnimatedImage
            src={Coindesk}
            alt="coindesk"
            title="coindesk"
            currentActiveImage={activeFeaturedImage}
            handleActiveImage={setActiveFeaturedImage}
          />
          <AnimatedImage
            src={Forbes}
            alt="forbes"
            title="forbes"
            currentActiveImage={activeFeaturedImage}
            handleActiveImage={setActiveFeaturedImage}
          />
        </div>
      </section> */}
      <section className="container">
        <section className="row spacing-between-section featured-info-section extra-padding">
          <div className="col-md-6 col-sm-12">
            <span className="bg-primary bg-opacity-25 text-primary text-capitalize fs-xs featured-badge">
              Trust, Security, Credibility
            </span>
            <h2 className="text-capitalize text-secondary fs-2xl fw-bold featured-info-heading">What's Develocity?</h2>
            <p className="fs-md mb-3 text-body-text">
              Develocity aspires to present its final project in four primary stages. Each stage is presented separately
              and merged in the post-final stage to create a decentralised platform, which would be distinctively in
              terms of technology and development based on Web 3.0.
            </p>
            <p className="fs-md text-body-text">
              DeVelocity strives to create a safe and trustworthy crypto environment where investors and developers can
              interact securely, considering the transparent credibility and technical measures and standards.
              DeVelocity’s goal is to become a thought leadership organisation, enhancing the community’s awareness and
              knowledge of the cryptocurrency market by building a virtual academy.
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <Ecosystem />
          </div>
        </section>
      </section>
    </>
  );
};

export default Featured;
