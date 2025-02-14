"use client"
import React, { useState, useEffect } from 'react'

function PreLoad() {
    let timeVar=100
    const [time,setTime]=useState(timeVar)
    const [display,setDisplay]=useState('flex')
    useEffect(() => {
        const interval = setInterval(() => {
            if(timeVar > 0){
                timeVar=timeVar-15
                setTime(timeVar)
            } else {
                setDisplay('none')
                clearInterval(interval)
            }
        }, 100);
        return () => clearInterval(interval); 
    }, []);
    
    return (
        <div id="preloader-active" style={{display}}>
            <div className="preloader d-flex align-items-center justify-content-center"  style={{opacity:`${time}%`,display}}>
                <div className="preloader-inner position-relative">
                    <div className="text-center">
                        <img className="jump" src="/imgs/theme/favico.svg" alt=""/>
                        <h5 className="mb-5">در حال بارگذاری</h5>
                        <div className="loader">
                            <div className="bar bar1"></div>
                            <div className="bar bar2"></div>
                            <div className="bar bar3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreLoad
