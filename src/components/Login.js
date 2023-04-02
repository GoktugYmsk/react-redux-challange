import React from 'react'
import { useDispatch } from 'react-redux'
import { setPassword } from './altcomponents/Child2'



function Login() {

    const dispatch = useDispatch()

    return (
        <div>
          
            <input placeholder='Kullanıcı adı' />
            <input placeholder='şifre' onChange={(e) => dispatch(setPassword(e.target.value))} />
        </div>
    )
}

export default Login
