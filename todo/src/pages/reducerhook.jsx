import { useReducer } from "react"



const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        if (state < 10) { return state + 1 } else { return 10 }
    } else if (action.type === "DECREMENT") {
        if (state > 0) { return state - 1 } else { return 0 }
    } else {
        return 0;
    }

}

export default function ReducerHook() {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <>
            <div style={{ backgroundColor: "lightblue", padding: "10px", borderRadius: "5px" }}>
                <h1>Reducer Hook</h1>

                <div>
                    {state}

                    <button onClick={() => dispatch({ type: "INCREMENT" })} >INCR</button>
                    <button onClick={() => dispatch({ type: "DECREMENT" })}>DECR</button>
                    <button onClick={dispatch}>RESET</button>
                </div>
            </div>
        </>
    )
}
