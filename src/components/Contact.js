import React from 'react'
import { useDispatch } from 'react-redux'
import { setDeneme } from './altcomponents/Child1'

function Contact() {

    const dispatch = useDispatch()

  return (
    <div>
      <input placeholder='kendinizi tanıtan bir cümle yazınız' onChange={(e)=> dispatch(setDeneme(e.target.value))} />
    </div>
  )
}

export default Contact
