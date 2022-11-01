import React from 'react'
import pic from '../images/francis.png'
import '../App.css'

export default function Image() {
  return (
    <div>
        <img src={pic} alt="Franc smiling" className='img-avatar'/>
        <h1 className='title'>Franc Enemuo</h1>
    </div>
  )
}
