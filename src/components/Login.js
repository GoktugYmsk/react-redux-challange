import React from 'react'
import { useDispatch } from 'react-redux'
import { setPassword } from './altcomponents/Child2'
import { Helmet } from 'react-helmet';


function Login() {

    const dispatch = useDispatch()

    return (
        <div>
            <Helmet>
                <title>Log in</title>
            </Helmet>
            <input placeholder='Kullanıcı adı' />
            <input placeholder='şifre' onChange={(e) => dispatch(setPassword(e.target.value))} />
        </div>
    )
}

export default Login
