import { useState } from "react"
import TextItem from "../CommonStage/TextItem"
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText"
import toast, { Toaster } from 'react-hot-toast';


const ReferralsModal = ({ handleStep }) => {

  const [link,setLink] = useState("https//develocity.finance/referral/mamuka")

  const copyToClipboard = async () =>{
    await navigator.clipboard.writeText(link);
    alert('Text copied');
  }

  return (
    <section className="d-flex flex-column justify-content-center align-items-center">
    <svg className="mb-3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="70" height="70" viewBox="0 0 70 70">
      <defs>
        <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#8247e5"/>
          <stop offset="1" stop-color="#53269f"/>
        </linearGradient>
      </defs>
      <circle id="Polygon_MATIC_" data-name="Polygon (MATIC)" cx="35" cy="35" r="35" fill="#8247E5"/>
      <path id="logo_Converted_" data-name="logo [Converted]" d="M133.325,35.306,117.471,20.449,117.2.294h17.645c.977,0,8.253-.382,12.7,4.479a14.494,14.494,0,0,1,4.289,9.941L145.6,17.937c0-2.84-.271-5.681-2.66-8.193-2.823-2.895-7.818-2.567-7.872-2.567H124.1l.109,10.269,9.5,8.9,18.514-9.832Z" transform="translate(-98.064 18.848)" fill="#fff"/>
    </svg>

    <ModalHeaderText header="Referrals" caption="Use Your Code Or Claim Referrals"/>
    <div className="ref-container">
      <label className="referral-lable">Referral Link</label>
      <div className="copy-link d-flex ">
        <p className="mx-2 my-3">{link}</p>
        <svg className="m-3 copy-svg" onClick={()=>copyToClipboard()} xmlns="http://www.w3.org/2000/svg" width="21.5" height="21.5" viewBox="0 0 21.5 21.5">
          <path id="Vector" d="M14,4.9V9.1c0,3.5-1.4,4.9-4.9,4.9H4.9C1.4,14,0,12.6,0,9.1V4.9C0,1.4,1.4,0,4.9,0H9.1C12.6,0,14,1.4,14,4.9Z" transform="translate(0.75 6.75)" fill="none" stroke="#292d32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          <path id="Vector-2" data-name="Vector" d="M14,4.9V9.1c0,3.5-1.4,4.9-4.9,4.9H8V10.9C8,7.4,6.6,6,3.1,6H0V4.9C0,1.4,1.4,0,4.9,0H9.1C12.6,0,14,1.4,14,4.9Z" transform="translate(6.75 0.75)" fill="none" stroke="#292d32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity="0.4"/>
        </svg>
      </div>
    </div>
    <div className="mt-4 w-100">
          <TextItem title={"Your Referrals"} value="500" hr="true" />
          <TextItem title={"Referrals To Claim"} value="250"/>
    </div>
    <button className="referrals-btn mt-5" onClick={() => handleStep("final")}>Claim →</button>
  </section>
  )
}

export default ReferralsModal