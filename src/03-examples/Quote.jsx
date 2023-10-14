import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({data}) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({width: 0, height: 0});
    
    useLayoutEffect(() => {
      const {height, width} = pRef.current.getBoundingClientRect();
      setBoxSize({
        height,
        width
      })
    }, [data.name])

  return (
    <>
      <blockquote 
        className='blockquote text-center'
        style={{display: 'flex'}}  
      >
          {data.image ? (<img src={data.image} alt="" />) : (<h3>Image Not Found</h3>)}
          
          <p ref={pRef} className='mb-1'>{data.name}</p>
          <footer className='blockquote-footer'>{data.gender}</footer>
      </blockquote>

      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}
