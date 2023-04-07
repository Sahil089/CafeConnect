import React, { useEffect } from 'react'
import {preLoaderAnim} from '../animations'
import '../styles/Preloader.css'

function Preloader() {
    useEffect(()=>{
        preLoaderAnim()
    },[]);
  return (
    <div className='preloader'>
        <div className='texts-container'>
            <span>Eat-</span>
            <span>-Connect-</span>
            <span>-Indulge</span>
        </div>
    </div>  )
}

export default Preloader