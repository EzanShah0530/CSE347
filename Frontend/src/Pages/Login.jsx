import React from 'react';
//import { useState } from 'react'

export default function Login(){
    return(
        <div className='d-flex justify-content-center'>
            <div className='mb3'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter Email'></input>
            </div>
            <div className='mb3'>
                <label htmlFor='password'>Password</label>
                <input type='email' placeholder='Enter Password'></input>
            </div>
            
        </div>
    )
}
