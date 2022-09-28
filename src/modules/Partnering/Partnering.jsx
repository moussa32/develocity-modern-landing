import coinbaseImag from './../../assets/images/Coinbase.png';
import bitmexImag from './../../assets/images/bitmex.png';
import binanceImag from './../../assets/images/binance.png';
import { useState, useEffect } from 'react';
import styles from './Partnering.module.css'

import { Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/free-mode";

import { FreeMode } from "swiper";

export function Partnering() {
    const [swiperRef, setSwiperRef] = useState(null);
    swiperRef?.slideTo(1, 10);

    // filter: sepia(100%) hue-rotate(200deg) saturate(800%)

    return (
        <>


            {/* <Swiper
                // install Swiper modules
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={450}
                slidesPerView={3}
                navigation
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src={coinbaseImag} alt="Coinbase" loading='lazy' /></SwiperSlide>
                <SwiperSlide><img src={bitmexImag} alt="bitmex" loading='lazy' /></SwiperSlide>
                <SwiperSlide><img src={binanceImag} alt="binance" loading='lazy' /></SwiperSlide>
            </Swiper> */}

            <div className={`container ${styles.partneringWraper}`}>
                <h3 className={`text-center text-secondary`}>Partnering With</h3>
                <div className={`${styles.partnering_body} `}>
                    <div className=''><img src={coinbaseImag} alt="Coinbase" loading='lazy' /></div>
                    <div className=''><img src={bitmexImag} alt="bitmex" loading='lazy' /></div>
                    <div className=''><img src={binanceImag} alt="binance" loading='lazy' /></div>

                </div>
                <div className={`${styles.sliderShow}`}>
                    <Swiper className="mySwiper"
                        slidesPerView={1}
                        freeMode={true}
                        spaceBetween={-100}
                        onSwiper={setSwiperRef}
                        modules={[FreeMode]}
                    >

                        <SwiperSlide className={`text-center ${styles.slideContent} `}>
                            {({ isActive }) => (
                                isActive ? <img src={coinbaseImag} alt="Coinbase" loading='lazy' className={isActive ? styles.active : styles.notActive} /> :
                                    <></>
                            )}
                        </SwiperSlide>
                        <SwiperSlide className={`text-center ${styles.slideContent} `}>
                            {({ isActive }) => (
                                isActive ? <img src={bitmexImag} alt="bitmex" loading='lazy' className={isActive ? styles.active : styles.notActive} /> :
                                    <img src={bitmexImag} alt="bitmex" loading='lazy' />


                            )}

                        </SwiperSlide>
                        <SwiperSlide className={` text-center ${styles.slideContent} `}>
                            {({ isActive }) => (
                                isActive ? <img src={binanceImag} alt="binance" loading='lazy' className={isActive ? styles.active : styles.notActive} /> :
                                    <>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="903.82" height="180.763" viewBox="0 0 903.82 180.763">
  <g id="Binance_Logo" data-name="Binance Logo" transform="translate(0.006)">
    <path id="Path_514" data-name="Path 514" d="M44.841,75.954,79.948,40.861,115.07,75.983l20.416-20.431L79.948,0,24.41,55.538Z" transform="translate(10.443)" fill="#f0b90b"/>
    <path id="Path_515" data-name="Path 515" d="M0,0H28.883V28.883H0Z" transform="translate(-0.005 90.385) rotate(-45)" fill="#f0b90b"/>
    <path id="Path_516" data-name="Path 516" d="M44.849,73.414l35.107,35.107L115.078,73.4l20.431,20.4-.014.014L79.957,149.369,24.419,93.845l-.029-.029Z" transform="translate(10.434 31.394)" fill="#f0b90b"/>
    <path id="Path_517" data-name="Path 517" d="M0,0H28.883V28.883H0Z" transform="translate(139.906 90.389) rotate(-45)" fill="#f0b90b"/>
    <path id="Path_518" data-name="Path 518" d="M90.241,69.51,69.525,48.78,54.205,64.1l-1.77,1.756-3.626,3.626-.029.029.029.043,20.716,20.7,20.716-20.73.014-.014Z" transform="translate(20.866 20.864)" fill="#f0b90b"/>
    <g id="Group_3573" data-name="Group 3573" transform="translate(212.617 42.199)">
      <path id="Path_519" data-name="Path 519" d="M148.37,30.68H192.8q16.533,0,25.014,8.566a22.129,22.129,0,0,1,6.553,16.162v.271a23.794,23.794,0,0,1-1.014,7.253,22.273,22.273,0,0,1-2.727,5.711,21.086,21.086,0,0,1-3.94,4.454,25.584,25.584,0,0,1-4.84,3.284,32.352,32.352,0,0,1,13.092,8.566q4.769,5.425,4.768,14.991v.271a24.9,24.9,0,0,1-2.527,11.507,22.446,22.446,0,0,1-7.238,8.224,34.337,34.337,0,0,1-11.35,4.926,60.962,60.962,0,0,1-14.691,1.642H148.37Zm39.976,38.748a21.973,21.973,0,0,0,11.093-2.4,8.281,8.281,0,0,0,4.083-7.738V59.02a8.466,8.466,0,0,0-3.555-7.324q-3.555-2.527-10.265-2.527H168.915V69.428Zm5.611,38.62a20.273,20.273,0,0,0,10.993-2.527,8.681,8.681,0,0,0,3.969-7.881v-.271a9.009,9.009,0,0,0-3.7-7.6q-3.684-2.855-11.907-2.855h-24.4v21.13Z" transform="translate(-148.37 -29.077)" fill="#f0b90b"/>
      <path id="Path_520" data-name="Path 520" d="M223.88,30.68h21.087v95.857H223.88Z" transform="translate(-116.073 -29.077)" fill="#f0b90b"/>
      <path id="Path_521" data-name="Path 521" d="M261,30.68h19.445L325.39,89.673V30.68h20.816v95.857H328.26L281.845,65.6v60.935H261Z" transform="translate(-100.197 -29.077)" fill="#f0b90b"/>
      <path id="Path_522" data-name="Path 522" d="M377.71,30.2h19.417L438.2,126.742H416.187l-8.766-21.5H366.888l-8.766,21.5h-21.5ZM399.9,86.623l-12.764-31.1-12.707,31.1Z" transform="translate(-67.853 -29.282)" fill="#f0b90b"/>
      <path id="Path_523" data-name="Path 523" d="M423.74,30.68h19.445L488.1,89.673V30.68h20.816v95.857H490.971L444.556,65.6v60.935H423.74Z" transform="translate(-30.591 -29.077)" fill="#f0b90b"/>
      <path id="Path_524" data-name="Path 524" d="M551.291,128.7a49.87,49.87,0,0,1-19.588-3.826A47.358,47.358,0,0,1,505.818,98.72a50.744,50.744,0,0,1-3.7-19.317v-.271A49.742,49.742,0,0,1,516.1,44.138a47.445,47.445,0,0,1,15.7-10.679,51.258,51.258,0,0,1,20.259-3.9,63.521,63.521,0,0,1,12.25,1.1,50.908,50.908,0,0,1,10.08,3.012,43.545,43.545,0,0,1,8.352,4.654,56.412,56.412,0,0,1,7.139,6.025L576.476,59.829a50.987,50.987,0,0,0-11.422-7.952,29.227,29.227,0,0,0-13.078-2.855,26.526,26.526,0,0,0-19.988,8.766,30.117,30.117,0,0,0-5.768,9.523,32.648,32.648,0,0,0-2.042,11.579v.271a33.127,33.127,0,0,0,2.042,11.564,30.43,30.43,0,0,0,5.71,9.58,26.356,26.356,0,0,0,19.988,8.909,29.3,29.3,0,0,0,13.892-3.012A53.723,53.723,0,0,0,577.1,97.977l13.42,13.563a68.409,68.409,0,0,1-7.667,7.139,45.689,45.689,0,0,1-8.695,5.411,45.063,45.063,0,0,1-10.336,3.412A61.553,61.553,0,0,1,551.291,128.7Z" transform="translate(2.933 -29.557)" fill="#f0b90b"/>
      <path id="Path_525" data-name="Path 525" d="M581.47,30.68h72.143V49.44h-51.4V68.886h45.259v18.76H602.286v20.131h52.04v18.76H581.513Z" transform="translate(36.872 -29.077)" fill="#f0b90b"/>
    </g>
  </g>
</svg> */}
                                    </>


                            )}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </>
    )
}