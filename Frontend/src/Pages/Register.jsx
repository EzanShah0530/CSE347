import React from 'react';
//import { useState } from 'react'

export default function Reg(){
    return(
        <div className='d-flex justify-content-center'>
            <div className='mb3'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter Email'></input>
            </div>
        </div>
    )
}
