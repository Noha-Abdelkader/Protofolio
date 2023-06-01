import React from 'react';
import styles from './OverLayer.module.css'

export default function OverLayer() {

    window.onload=()=>{
    //    return (document.getElementById('overLayer').classList.replace('top-100', 'top-0'))
    return document.getElementById('overLayer').classList.add( 'up')
    // console.log( document.getElementById('overLayer').classList.add( 'up') , document.getElementById('overLayer').className);
    };




  return <div id='overLayer'  className={`${styles.overLayer}  position-absolute end-0 start-0`}></div>
}
