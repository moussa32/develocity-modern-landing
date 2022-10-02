export function Step4({next}){
    return(
        <>
        <h1>step4</h1>
        <button onClick={()=>next(1)}>next</button>
        </>
    )
}