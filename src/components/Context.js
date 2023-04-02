import React from 'react'
import { useSelector } from 'react-redux'

function Context() {

    const denemeScreen = useSelector((state) => state.activeTheme.deneme)

    return (
        <div className='contextContainer' >
            <p>{denemeScreen}</p>
        </div>
    )
}

export default Context
