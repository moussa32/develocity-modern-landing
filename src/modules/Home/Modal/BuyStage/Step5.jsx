export function Step5({next}){
    return(
        <>
        <h1>step5</h1>
        <button onClick={()=>next(1)}>next</button>
        </>
    )
}