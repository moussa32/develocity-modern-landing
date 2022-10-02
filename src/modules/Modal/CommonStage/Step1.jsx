import { ModalHeaderText } from "../ModalHeader/ModalHeaderText"
export function Step1({ next }) {
    return (
        <>
            <div>
                <ModalHeaderText
                    header="Your Wallet"
                    caption="DEVE Balance In Your Wallet"
                />
                <h1>step1</h1>
                <button onClick={() => next(1)}>Next</button>
            </div>

        </>
    )
}