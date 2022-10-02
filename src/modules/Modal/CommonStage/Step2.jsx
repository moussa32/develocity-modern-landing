import { useState } from "react"
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText"

export function Step2({ next }) {
    const [increasedValue, setIncreasedValue]=useState(1)
    return (
        <>
            <div>
                <ModalHeaderText
                    header="Select Your Option"
                    caption="What You Wanna Do!"
                />

                <div>
                    <button class="d-block m-auto select-btn"  >Buy DEVE</button>
                    <button onclick={()=>setIncreasedValue(increasedValue+5)} className="d-block m-auto select-btn"  >Claim Your Tokens</button>
                    <button onclick={()=>setIncreasedValue(4)} className="d-block m-auto select-btn" >Referrals</button>
                </div>
                <button onClick={() => next(increasedValue)}>Next</button>
            </div>
        </>
    )
}

