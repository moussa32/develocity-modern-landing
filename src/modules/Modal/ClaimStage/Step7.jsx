export function Step7({next}){
    return(
        <>
        <h1>step 7</h1>
        <button onClick={()=>next(1)}>next</button>
        </>
    )
}