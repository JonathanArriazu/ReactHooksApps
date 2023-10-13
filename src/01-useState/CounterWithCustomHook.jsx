import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { counter, increment, reset, decrement } = useCounter(0);

  return (
    <>
        <h1>CounterWithCustomHook: {counter}</h1>
        <button className='btn btn-primary' onClick={() => decrement(2)}>-1</button>
        <button className='btn btn-danger' onClick={reset}>Reset</button>
        <button className='btn btn-primary' onClick={() => increment(2)}>+1</button>

    </>
  )
}
