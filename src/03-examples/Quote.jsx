import React from 'react'

export const Quote = ({data}) => {
    console.log(data)
  return (
    <blockquote className='blockquote text-center'>
        {data.image ? (<img src={data.image} alt="" />) : (<h3>Image Not Found</h3>)}
        
        <p className='mb-1'>{data.name}</p>
        <footer className='blockquote-footer'>{data.gender}</footer>
    </blockquote>
  )
}
