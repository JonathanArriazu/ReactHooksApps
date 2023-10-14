import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(0)

    /* const incrementFather = () => {
        setCounter(counter + 1);
    } */
    
    //useCallback es como el useMemo, pero en lugar de memorizar valores, sirve para memorizar funciones 
    const incrementFather = useCallback(
      (value) => {
        setCounter( (c) => c + value);
      },
      [],
    )
    

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFather}/>
        </>
    )
    }
