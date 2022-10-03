import { useState } from "react";
import TextItem from "../CommonStage/TextItem";
import toast, { Toaster } from "react-hot-toast";

const BuyAmountModal = ({ handleStep, walletAddress, disconnect, currentCurrency }) => {
  const [balance, setBalance] = useState("2,914.0594");

  const [fromBalance, setFromBalance] = useState(0);
  const [toBalance, setToBalance] = useState(0);

  //getwethPrice(265 خانة)

  const approveAlert = () => {
    // window.alert("Approved")
    toast.success("Approved! You can swap your coins.", {
      style: {
        border: "1px solid #35C486",
        padding: "16px",
        backgroundColor: "#DCFFEF",
        color: "#35C486",
        width: "300px",
        borderRadius: "8px",
      },
      iconTheme: {
        primary: "#35C486",
      },
    });
  };

  return (
    <section className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex address-float w-100">
        <svg
          className="close-icon"
          onClick={() => disconnect()}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            id="Vector"
            d="M0,5.66,5.66,0"
            transform="translate(9.17 9.17)"
            fill="none"
            stroke="#23282c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <path
            id="Vector-2"
            data-name="Vector"
            d="M5.66,5.66,0,0"
            transform="translate(9.17 9.17)"
            fill="none"
            stroke="#23282c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <path
            id="Vector-3"
            data-name="Vector"
            d="M7,20h6c5,0,7-2,7-7V7c0-5-2-7-7-7H7C2,0,0,2,0,7v6C0,18,2,20,7,20Z"
            transform="translate(2 2)"
            fill="none"
            stroke="#8b8b8b"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" fill="none" opacity="0" />
        </svg>
        <h5 className="address">{walletAddress && walletAddress.slice(0, 10) + "..." + walletAddress.slice(31, 41)}</h5>
      </div>

      <div className="mt-4">
        <div className="d-flex justify-content-between">
          <label className="first-lable">From</label>
          <h5 className="second-lable">Balance: {currentCurrency.balance} </h5>
        </div>
        <div className="d-flex s-container">
          <input
            className="w-75"
            value={fromBalance}
            type="number"
            onChange={(e) => {
              setFromBalance(e.target.value);
            }}
            placeholder="0"
          />
          <div className="bnb-container d-flex bg-white justify-content-center align-items-center w-25">
            <svg xmlns="http://www.w3.org/2000/svg" width="23.998" height="24" viewBox="0 0 23.998 24">
              <path
                id="Binance_Coin_BNB_"
                data-name="Binance Coin (BNB)"
                d="M23.638,14.9A12,12,0,1,1,14.9.359,12,12,0,0,1,23.638,14.9h0Z"
                fill="#f3ba2f"
              />
              <path
                id="Binance_Coin_BNB_2"
                data-name="Binance Coin (BNB)"
                d="M1.807,6.72,4.913,3.614,8.02,6.721,9.827,4.914,4.913,0,0,4.913,1.807,6.72"
                transform="translate(7.091 4.004)"
                fill="#fff"
              />
              <path
                id="Binance_Coin_BNB_3"
                data-name="Binance Coin (BNB)"
                d="M1.809,0,4.915,3.107,8.022,0,9.83,1.806h0L4.915,6.721,0,1.808l0,0L1.81,0"
                transform="translate(7.088 13.275)"
                fill="#fff"
              />
              <path
                id="Binance_Coin_BNB_4"
                data-name="Binance Coin (BNB)"
                d="M0,1.807,1.807,0,3.614,1.807,1.807,3.614Z"
                transform="translate(16.385 10.194)"
                fill="#fff"
              />
            </svg>
            <span>{currentCurrency.ticker}</span>
          </div>
        </div>
      </div>

      <svg
        className="mt-3"
        xmlns="http://www.w3.org/2000/svg"
        width="16.284"
        height="21.333"
        viewBox="0 0 16.284 21.333"
      >
        <path
          id="Vector"
          d="M14.163,0,7.082,7.082,0,0"
          transform="translate(1.061 13.502)"
          fill="none"
          stroke="#292d32"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M0,0V19.635"
          transform="translate(8.143 0.75)"
          fill="none"
          stroke="#292d32"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          opacity="0.4"
        />
      </svg>

      <div className="mt-1">
        <div className="d-flex justify-content-between">
          <label className="first-lable">To</label>
        </div>
        <div className="d-flex s-container">
          <input
            className="w-75"
            value={toBalance}
            onChange={(e) => {
              setToBalance(e.target.value);
            }}
            placeholder="0"
          />
          <div className="bnb-container d-flex bg-white justify-content-center align-items-center w-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="23.998"
              height="24"
              viewBox="0 0 23.998 24"
            >
              <defs>
                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#9c3fe5" />
                  <stop offset="1" stop-color="#53269f" />
                </linearGradient>
              </defs>
              <path
                id="Binance_Coin_BNB_"
                data-name="Binance Coin (BNB)"
                d="M23.638,14.9A12,12,0,1,1,14.9.359,12,12,0,0,1,23.638,14.9h0Z"
                fill="#9C3FE5"
              />
              <path
                id="logo_Converted_"
                data-name="logo [Converted]"
                d="M122.726,12.287,117.293,7.2,117.2.289h6.047A5.85,5.85,0,0,1,127.6,1.824a4.967,4.967,0,0,1,1.47,3.406l-2.14,1.1a3.719,3.719,0,0,0-.912-2.808,3.861,3.861,0,0,0-2.7-.88h-3.758l.037,3.519,3.256,3.051L129.2,5.848Z"
                transform="translate(-111.155 6.416)"
                fill="#ecedf2"
              />
            </svg>

            <span>DEVE</span>
          </div>
        </div>
      </div>
      <div className="mt-4 w-100">
        <TextItem title={"Price"} value="1" percentage="20.64" hr="true" />
        <TextItem title={"Estimate Balance"} value="2,000" percentage="2,003.64" hr="true" />
      </div>

      <div className="d-flex justify-content-between w-100">
        <button className="m-btns approve" onClick={() => approveAlert()} disabled={balance ? false : true}>
          Approve
        </button>
        <button className="m-btns buy" onClick={() => handleStep("final")}>
          Buy →
        </button>
      </div>
    </section>
  );
};
export default BuyAmountModal;
