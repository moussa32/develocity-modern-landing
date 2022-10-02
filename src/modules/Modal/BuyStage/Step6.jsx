export function Step6({next}){
    return(
        <>
        <h1>step6</h1>
        <button onClick={()=>next(1)}>next</button>
        </>
    )
}