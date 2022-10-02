export function Step3({next}){
    return(
        <>
        <h1>step3</h1>
        <button onClick={()=>next(1)}>next</button>
        </>
    )
}