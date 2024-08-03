import React from 'react'
import './loding.css'

function Loding() {
  return (
    <div className='loding'>
        <div className="droid">

            <div className="rsdios">
                <div className="radio short"></div>
                <div className="radio long"></div>
            </div>
            <div className="head">
                <div className="band one"></div>
                <div className="band two"></div>
                <div className="eyes">
                    <div className="eye one"></div>
                    <div className="eye two"></div>
                </div>
                <div className="band three"></div>
            </div>
            <div className="body">
                <div className="lines one"></div>
                <div className="lines two"></div>
                <div className="circle  one"></div>
                <div className="circle  two"></div>
                <div className="circle  three"></div>
            </div>
        </div>
        <div className="text">
            <span>LOADING...</span>
        </div>
    </div>
  )
}

export default Loding