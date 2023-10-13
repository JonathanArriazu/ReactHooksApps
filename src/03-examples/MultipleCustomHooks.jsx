import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);


    /* const {name, gender} = !!data && data[0]; */ // => Si la data tiene un valor, entonces toma la de la primera posicion (que es 0)

    console.log("data:",data, ",isLoading:",isLoading, ",hasError:", hasError)

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading ? (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                 ) : (
                    <blockquote className='blockquote text-center'>
                        <img src={data.image} alt="" />
                        <p className='mb-1'>{data.name}</p>
                        <footer className='blockquote-footer'>{data.gender}</footer>
                    </blockquote>
                 )
            }

            <button 
                onClick={() => {increment(1)}}
                disabled={isLoading}
            >Generar id</button>
        </>
    )
}
