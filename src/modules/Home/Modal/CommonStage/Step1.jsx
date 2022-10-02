export function Step1({next}){
    return(
        <>
        <h1>step1</h1>
        <button onClick={()=>next(1)}>Next</button>
        </>
    )
}