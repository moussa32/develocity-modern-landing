// import coinbaseImag from './../../../assets/images/Coinbase.png';
// import binanceImag from './../../../assets/images/binance.png';
// import bitmexImag from './../../../assets/images/bitmex.png';

import coinbaseImag from "./../../../assets/images/CoinbaseColored.svg";
import bitmexImag from "./../../../assets/images/BitmexColored.svg";
import binanceImag from "./../../../assets/images/BinanceColored.svg";
import { useState } from "react";
import AnimatedImage from "../../../shared/components/AnimatedImage";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Partnering.module.css";
import "./partnering.css";
import "swiper/css";
import "swiper/css/free-mode";
import { useTranslation } from "react-i18next";

import { FreeMode } from "swiper";

export function Partnering() {
  const { t } = useTranslation();
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeFeaturedImage, setActiveFeaturedImage] = useState(null);

    swiperRef?.slideTo(1, 10);

  // filter: sepia(100%) hue-rotate(200deg) saturate(800%)

  return (
    <>
      <div className={`container ${styles.partneringWraper}`}>
        <h3 className={`text-center text-secondary`}>{t("partnersSection.mainText")}</h3>

        <div className={`${styles.partnering_body} `}>
          <div className={`${styles.imgColorful}`}>
            {/* <img src={coinbaseImag} alt="Coinbase" loading='lazy' /> */}
            <AnimatedImage
              src={coinbaseImag}
              alt="coinbase"
              title="coinbase"
              currentActiveImage={activeFeaturedImage}
              handleActiveImage={setActiveFeaturedImage}
            />
          </div>
          <div className={`${styles.imgColorful}`}>
            {/* <img src={bitmexImag} alt="bitmex" loading='lazy' /> */}
            <AnimatedImage
              src={bitmexImag}
              alt="bitmex"
              title="bitmex"
              currentActiveImage={activeFeaturedImage}
              handleActiveImage={setActiveFeaturedImage}
            />
          </div>
          <div className={`${styles.imgColorful}`}>
            {/* <img src={binanceImag} alt="binance" loading='lazy' /> */}
            <AnimatedImage
              src={binanceImag}
              alt="binance"
              title="binance"
              currentActiveImage={activeFeaturedImage}
              handleActiveImage={setActiveFeaturedImage}
            />
          </div>
        </div>
        <div className={`${styles.sliderShow}`}>
          <Swiper
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={-100}
            onSwiper={setSwiperRef}
            modules={[FreeMode]}
          >
            <SwiperSlide className={`text-center partnering-slide-item ${styles.slideContent} `}>
              <svg xmlns="http://www.w3.org/2000/svg" width="250" height="40" viewBox="0 0 903.82 161.454">
                <g id="Coinbase_Logo" data-name="Coinbase Logo" transform="translate(-65.891 -485.53)">
                  <path
                    id="Path_582"
                    data-name="Path 582"
                    d="M248.306,530.6c-32.834,0-58.489,24.925-58.489,58.292s25.007,58.079,58.489,58.079,58.924-25.138,58.924-58.292C307.222,555.743,282.223,530.6,248.306,530.6Zm.213,92.324c-18.7,0-32.4-14.522-32.4-34.024,0-19.723,13.48-34.237,32.178-34.237,18.919,0,32.612,14.735,32.612,34.237S267.217,622.929,248.52,622.929ZM314.4,555.965h16.31v88.854H356.8V532.779H314.4Zm-190.243-1.3c13.7,0,24.572,8.451,28.7,21.02h27.616c-5-26.869-27.181-45.075-56.093-45.075C91.545,530.6,65.89,555.53,65.89,588.9s25.007,58.079,58.489,58.079c28.264,0,50.875-18.206,55.88-45.3H152.865c-3.913,12.569-14.784,21.241-28.486,21.241C105.46,622.921,92.2,608.4,92.2,588.9,92.193,569.182,105.238,554.66,124.158,554.66Zm685.969,23.407-19.133-2.814c-9.131-1.3-15.654-4.332-15.654-11.486,0-7.8,8.483-11.7,20-11.7,12.61,0,20.659,5.415,22.4,14.3h25.22C840.13,543.83,822.737,530.613,796,530.613c-27.616,0-45.879,14.087-45.879,34.024,0,19.067,11.962,30.127,36.091,33.589l19.133,2.814c9.353,1.3,14.571,4.988,14.571,11.921,0,8.885-9.131,12.569-21.742,12.569-15.441,0-24.137-6.284-25.442-15.818H747.076c2.4,21.889,19.568,37.273,50.875,37.273,28.486,0,47.4-13,47.4-35.328C845.348,591.719,831.647,581.316,810.126,578.067ZM343.748,486.613c-9.566,0-16.745,6.933-16.745,16.466s7.179,16.474,16.745,16.474,16.745-6.933,16.745-16.466S353.323,486.613,343.748,486.613ZM726.63,571.135c0-24.269-14.784-40.521-46.092-40.521-29.569,0-46.092,14.957-49.358,37.929h25.877c1.3-8.885,8.262-16.253,23.046-16.253,13.266,0,19.789,5.85,19.789,13,0,9.32-11.962,11.7-26.746,13.217-20,2.166-44.788,9.1-44.788,35.107,0,20.158,15.006,33.154,38.922,33.154,18.7,0,30.438-7.8,36.313-20.158.87,11.051,9.131,18.206,20.659,18.206H739.47V621.633H726.639v-50.5Zm-25.655,28.174c0,14.957-13.045,26.008-28.92,26.008-9.788,0-18.05-4.119-18.05-12.782,0-11.051,13.266-14.087,25.442-15.383,11.74-1.083,18.263-3.684,21.528-8.672Zm-138.5-68.7a45.479,45.479,0,0,0-35.443,16.253V485.53h-26.09V644.818H526.6V630.083a45.254,45.254,0,0,0,35.878,16.9c31.308,0,55.01-24.7,55.01-58.079S593.35,530.6,562.477,530.6Zm-3.913,92.324c-18.7,0-32.4-14.522-32.4-34.024s13.915-34.237,32.612-34.237c18.919,0,32.178,14.522,32.178,34.237C590.963,608.407,577.261,622.929,558.564,622.929ZM438.55,530.6c-16.958,0-28.051,6.933-34.573,16.688V532.771H378.1V644.81h26.09V583.917c0-17.123,10.871-29.257,26.96-29.257,15.006,0,24.351,10.617,24.351,26.008v64.15h26.09V578.724C481.6,550.55,467.027,530.6,438.55,530.6Zm531.16,54.617c0-32.071-23.481-54.608-55.01-54.608-33.482,0-58.054,25.138-58.054,58.292,0,34.893,26.311,58.079,58.489,58.079,27.181,0,48.488-16.04,53.919-38.79H941.872c-3.914,9.968-13.48,15.6-26.311,15.6-16.745,0-29.355-10.4-32.178-28.609H969.7v-9.968Zm-84.792-8.672c4.135-15.6,15.875-23.186,29.355-23.186,14.784,0,26.09,8.451,28.7,23.186Z"
                    fill="#3259a5"
                  />
                </g>
              </svg>

              {/* {({ isActive }) => (
                                isActive ? <img src={coinbaseImag} alt="Coinbase" loading='lazy' className={isActive ? styles.active : styles.notActive} /> :
                                    <></>
                            )} */}
            </SwiperSlide>
            <SwiperSlide className={`text-center partnering-slide-item ${styles.slideContent} `}>
              <svg
                id="Bitmex_Logo"
                data-name="Bitmex Logo"
                xmlns="http://www.w3.org/2000/svg"
                width="250"
                height="40"
                viewBox="0 0 903.818 147.103"
              >
                <path
                  id="Path_572"
                  data-name="Path 572"
                  d="M77,3.85h84.619a5.586,5.586,0,0,1-1.11,3.094c-2.865,4.913-5.443,10.026-8.257,14.939-3.982,7.054-7.706,14.237-11.752,21.262-2.564,5.056-5.457,9.954-8.193,14.924H82.979c-.859,0-1.712.043-2.571.093a45.351,45.351,0,0,1-2.865,5.321c-1.253,2.034-2.27,4.2-3.509,6.238-1.311,2.736-3.122,5.185-4.44,7.913-2.721,4.619-5.264,9.31-7.928,13.979q-4.168,7.161-8.15,14.523a61.588,61.588,0,0,0-3.1,5.378c-5.564,9.682-10.95,19.45-16.521,29.125a11.687,11.687,0,0,1-1.848,2.865c-9.525-.064-19.049,0-28.574,0A14.617,14.617,0,0,0,0,143.991c0-2.635,1.762-4.748,2.95-6.961,1.432-2.972,3.344-5.729,4.784-8.708C19.149,107.9,30.443,87.4,41.822,66.963c2.578-4.44,4.791-8.973,7.383-13.327,3.237-5.729,6.252-11.587,9.625-17.252,1.074-2.37,2.521-4.54,3.7-6.853,4.2-7.469,8.314-14.982,12.5-22.451A13.055,13.055,0,0,1,77,3.85Z"
                  transform="translate(0 -1.093)"
                  fill="#eb4a60"
                />
                <g id="Group_3628" data-name="Group 3628" transform="translate(62.332)">
                  <path
                    id="Path_573"
                    data-name="Path 573"
                    d="M199.76,34.105C205.4,24.258,210.838,14.3,216.553,4.5h30.565a6.316,6.316,0,0,1,1.318.208c-1.017,1.54-1.869,3.172-2.764,4.777q-11.057,19.844-22.05,39.71c-3.079,5.392-5.944,10.907-9.066,16.271l-.308.107-.057.673q-21.556,38.671-42.968,77.4-42.087.043-84.182,0c1.6-3.337,3.488-6.524,5.264-9.768,7.992-14.7,16.192-29.261,24.069-43.956q25.86-.043,51.719,0c10.649-18.548,21.069-37.239,31.639-55.816Z"
                    transform="translate(-87.04 -1.277)"
                    fill="#595fb5"
                  />
                  <path
                    id="Path_574"
                    data-name="Path 574"
                    d="M684.91,3.97V145.192h24.47V45.885l44.637,65.4L798.3,44.331V145.192h25.186V3.97H796.391L754.2,69.16,711.529,3.97Z"
                    transform="translate(-256.754 -1.127)"
                    fill="#595fb5"
                  />
                  <path
                    id="Path_575"
                    data-name="Path 575"
                    d="M525.08,54.83h15.991V160.818H525.08Z"
                    transform="translate(-211.384 -15.564)"
                    fill="#595fb5"
                  />
                  <path
                    id="Path_576"
                    data-name="Path 576"
                    d="M523.16,0H541.9V17.782H523.16Z"
                    transform="translate(-210.839)"
                    fill="#595fb5"
                  />
                  <path
                    id="Path_577"
                    data-name="Path 577"
                    d="M584.5,12.42H601.2V42.791h32.942v14.8H601.2v62.963a14.931,14.931,0,0,0,1.64,6.982c2.829,5.371,10.513,11.745,31.3,4.3v13.721s-18.978,10.742-36.165.96c0,0-8.536-3.624-12.124-15.855a35.7,35.7,0,0,1-1.361-10.076V57.357l-14.086.236v-14.8h14.2Z"
                    transform="translate(-224.252 -3.526)"
                    fill="#595fb5"
                  />
                  <path
                    id="Path_578"
                    data-name="Path 578"
                    d="M914.41,3.97V146.144h106.224V123.228H940.313V85.509h70.776V62.951h-70.9V27.03H1019.8V3.97Z"
                    transform="translate(-321.901 -1.127)"
                    fill="#595fb5"
                  />
                  <path
                    id="Path_579"
                    data-name="Path 579"
                    d="M1075.6,3.97h30.257l34.733,49.915,34.46-49.915H1205.3l-49.413,69.336,52.493,72.716h-31.868l-35.807-53.109-37.54,53.23H1072.91l51.741-72.208Z"
                    transform="translate(-366.894 -1.127)"
                    fill="#595fb5"
                  />
                  <path
                    id="Path_580"
                    data-name="Path 580"
                    d="M422.724,72.524s23.4-8.83,21.964-34.253c0,0-.193-24.449-27.722-32a52.994,52.994,0,0,0-14.036-1.8H336.91l.179,141.222h71.076s41.593-.9,44.522-37.955c0,0,2.979-25.9-29.963-35.212ZM353.976,19.05h42.137c33.057-.115,32.1,23.16,32.1,23.16.494,26.554-29.841,26.017-29.841,26.017h-44.4Zm51.562,111.717H353.976V81.6h49.3c33.057-.122,32.1,23.153,32.1,23.153C435.873,131.3,405.537,130.767,405.537,130.767Z"
                    transform="translate(-157.969 -1.268)"
                    fill="#595fb5"
                  />
                </g>
              </svg>

              {/* {({ isActive }) => (
                                isActive ? <img src={bitmexImag} alt="bitmex" loading='lazy' className={isActive ? styles.active : styles.notActive} /> :
                                    <img src={bitmexImag} alt="bitmex" loading='lazy' />


                            )} */}
            </SwiperSlide>
            <SwiperSlide className={` text-center partnering-slide-item ${styles.slideContent} `}>
              <svg xmlns="http://www.w3.org/2000/svg" width="250" height="40" viewBox="0 0 903.82 180.763">
                <g id="Binance_Logo" data-name="Binance Logo" transform="translate(0.006)">
                  <path
                    id="Path_514"
                    data-name="Path 514"
                    d="M44.841,75.954,79.948,40.861,115.07,75.983l20.416-20.431L79.948,0,24.41,55.538Z"
                    transform="translate(10.443)"
                    fill="#f0b90b"
                  />
                  <path
                    id="Path_515"
                    data-name="Path 515"
                    d="M0,0H28.883V28.883H0Z"
                    transform="translate(-0.005 90.385) rotate(-45)"
                    fill="#f0b90b"
                  />
                  <path
                    id="Path_516"
                    data-name="Path 516"
                    d="M44.849,73.414l35.107,35.107L115.078,73.4l20.431,20.4-.014.014L79.957,149.369,24.419,93.845l-.029-.029Z"
                    transform="translate(10.434 31.394)"
                    fill="#f0b90b"
                  />
                  <path
                    id="Path_517"
                    data-name="Path 517"
                    d="M0,0H28.883V28.883H0Z"
                    transform="translate(139.906 90.389) rotate(-45)"
                    fill="#f0b90b"
                  />
                  <path
                    id="Path_518"
                    data-name="Path 518"
                    d="M90.241,69.51,69.525,48.78,54.205,64.1l-1.77,1.756-3.626,3.626-.029.029.029.043,20.716,20.7,20.716-20.73.014-.014Z"
                    transform="translate(20.866 20.864)"
                    fill="#f0b90b"
                  />
                  <g id="Group_3573" data-name="Group 3573" transform="translate(212.617 42.199)">
                    <path
                      id="Path_519"
                      data-name="Path 519"
                      d="M148.37,30.68H192.8q16.533,0,25.014,8.566a22.129,22.129,0,0,1,6.553,16.162v.271a23.794,23.794,0,0,1-1.014,7.253,22.273,22.273,0,0,1-2.727,5.711,21.086,21.086,0,0,1-3.94,4.454,25.584,25.584,0,0,1-4.84,3.284,32.352,32.352,0,0,1,13.092,8.566q4.769,5.425,4.768,14.991v.271a24.9,24.9,0,0,1-2.527,11.507,22.446,22.446,0,0,1-7.238,8.224,34.337,34.337,0,0,1-11.35,4.926,60.962,60.962,0,0,1-14.691,1.642H148.37Zm39.976,38.748a21.973,21.973,0,0,0,11.093-2.4,8.281,8.281,0,0,0,4.083-7.738V59.02a8.466,8.466,0,0,0-3.555-7.324q-3.555-2.527-10.265-2.527H168.915V69.428Zm5.611,38.62a20.273,20.273,0,0,0,10.993-2.527,8.681,8.681,0,0,0,3.969-7.881v-.271a9.009,9.009,0,0,0-3.7-7.6q-3.684-2.855-11.907-2.855h-24.4v21.13Z"
                      transform="translate(-148.37 -29.077)"
                      fill="#f0b90b"
                    />
                    <path
                      id="Path_520"
                      data-name="Path 520"
                      d="M223.88,30.68h21.087v95.857H223.88Z"
                      transform="translate(-116.073 -29.077)"
                      fill="#f0b90b"
                    />
                    <path
                      id="Path_521"
                      data-name="Path 521"
                      d="M261,30.68h19.445L325.39,89.673V30.68h20.816v95.857H328.26L281.845,65.6v60.935H261Z"
                      transform="translate(-100.197 -29.077)"
                      fill="#f0b90b"
                    />
                    <path
                      id="Path_522"
                      data-name="Path 522"
                      d="M377.71,30.2h19.417L438.2,126.742H416.187l-8.766-21.5H366.888l-8.766,21.5h-21.5ZM399.9,86.623l-12.764-31.1-12.707,31.1Z"
                      transform="translate(-67.853 -29.282)"
                      fill="#f0b90b"
                    />
                    <path
                      id="Path_523"
                      data-name="Path 523"
                      d="M423.74,30.68h19.445L488.1,89.673V30.68h20.816v95.857H490.971L444.556,65.6v60.935H423.74Z"
                      transform="translate(-30.591 -29.077)"
                      fill="#f0b90b"
                    />
                    <path
                      id="Path_524"
                      data-name="Path 524"
                      d="M551.291,128.7a49.87,49.87,0,0,1-19.588-3.826A47.358,47.358,0,0,1,505.818,98.72a50.744,50.744,0,0,1-3.7-19.317v-.271A49.742,49.742,0,0,1,516.1,44.138a47.445,47.445,0,0,1,15.7-10.679,51.258,51.258,0,0,1,20.259-3.9,63.521,63.521,0,0,1,12.25,1.1,50.908,50.908,0,0,1,10.08,3.012,43.545,43.545,0,0,1,8.352,4.654,56.412,56.412,0,0,1,7.139,6.025L576.476,59.829a50.987,50.987,0,0,0-11.422-7.952,29.227,29.227,0,0,0-13.078-2.855,26.526,26.526,0,0,0-19.988,8.766,30.117,30.117,0,0,0-5.768,9.523,32.648,32.648,0,0,0-2.042,11.579v.271a33.127,33.127,0,0,0,2.042,11.564,30.43,30.43,0,0,0,5.71,9.58,26.356,26.356,0,0,0,19.988,8.909,29.3,29.3,0,0,0,13.892-3.012A53.723,53.723,0,0,0,577.1,97.977l13.42,13.563a68.409,68.409,0,0,1-7.667,7.139,45.689,45.689,0,0,1-8.695,5.411,45.063,45.063,0,0,1-10.336,3.412A61.553,61.553,0,0,1,551.291,128.7Z"
                      transform="translate(2.933 -29.557)"
                      fill="#f0b90b"
                    />
                    <path
                      id="Path_525"
                      data-name="Path 525"
                      d="M581.47,30.68h72.143V49.44h-51.4V68.886h45.259v18.76H602.286v20.131h52.04v18.76H581.513Z"
                      transform="translate(36.872 -29.077)"
                      fill="#f0b90b"
                    />
                  </g>
                </g>
              </svg>
              {/* {({ isActive }) => (
                                isActive ? <img src={binanceImag} alt="binance" loading='lazy' className={isActive ? styles.active : styles.notActive} /> :
                                    <>
           
                                    </>


                            )} */}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
