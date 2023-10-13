import { useState } from "react"

export const CounterApp = () => {

    const [state, setState] = useState({
        state1: 10,
        state2: 20,
        state3: 30
    })

    const {state1, state2, state3} = state;

  return (
    <>
        <h1>Counter 1: {state1}</h1>
        <h1>Counter 2: {state2}</h1>
        <h1>Counter 3: {state3}</h1>


        <hr />

        <button 
            className='btn' 
            onClick={
                () => setState({
                    ...state,
                    state1: state1 + 1
                }
                )
            }
        >
            +1
        </button>
    </>
  )
}
