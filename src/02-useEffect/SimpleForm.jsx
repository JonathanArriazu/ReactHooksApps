import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formSate, setFormSate] = useState({
        username: 'Jonathan',
        email: 'joni.arriazu2@gmail.com'
    })

    const {username, email} = formSate;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormSate({
            ...formSate,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log("useEffect!!!")
    }, [])

    useEffect(() => {
        // console.log("formState changed!!!")
    }, [formSate])

    useEffect(() => {
        // console.log("email changed!!!")
    }, [email])

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input
            type="text"
            className='form-control'
            placeholder='Username'
            name='username'
            value={username}
            onChange={onInputChange}
        />

        <input
            type="email"
            className='form-control mt-2'
            placeholder='Email'
            name='email'
            value={email}
            onChange={onInputChange}
        />

        {username === 'Jonathan' && <Message />}
    </>
  )
}
