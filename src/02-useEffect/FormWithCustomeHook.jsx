import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustomeHook = () => {

    const { formSate, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })

    //const {username, email, password} = formSate;

  return (
    <>
        <h1>Formulario con custome Hook</h1>
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

        <input
            type="password"
            className='form-control mt-2'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onInputChange}
        />

        <button className='btn btn-primary mt-2' onClick={onResetForm}>Borrar</button>

    </>
  )
}
