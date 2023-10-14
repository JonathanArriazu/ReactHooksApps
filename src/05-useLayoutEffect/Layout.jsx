import React, { useState } from 'react'
import { useFetch, useCounter } from '../hooks/index'
import { LoadingQuote } from '../03-examples/LoadingQuote';
import { Quote } from '../03-examples/Quote';

export const Layout = () => {

    const {counter, increment} = useCounter(1);

    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);


    /* const {name, gender} = !!data && data[0]; */ // => Si la data tiene un valor, entonces toma la de la primera posicion (que es 0)

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading ? <LoadingQuote/> : <Quote data={data}/>
            }

            <button 
                className='btn btn-primary'
                onClick={() => {increment(1)}}
                disabled={isLoading}
            >Siguiente Personaje</button>
        </>
    )
}

