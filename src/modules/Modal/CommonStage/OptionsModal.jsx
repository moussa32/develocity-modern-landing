import { useState } from "react";
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";

export default function OptionsModal({ handleStep }) {
  const [selectedOption, setSelectedOption] = useState("");
  console.log(selectedOption);

  return (
    <>
      <div>
        <ModalHeaderText header="Select Your Option" caption="What You Wanna Do!" />
        <div>
          <button class="d-block m-auto select-btn" onClick={() => setSelectedOption("amount")}>
            Buy DEVE
          </button>
          <button onclick={() => setSelectedOption("")} className="d-block m-auto select-btn">
            Claim Your Tokens
          </button>
          <button onclick={() => setSelectedOption("")} className="d-block m-auto select-btn">
            Referrals
          </button>
        </div>
        <button onClick={() => handleStep(selectedOption)}>Next</button>
      </div>
    </>
  );
}
