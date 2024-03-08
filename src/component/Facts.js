import React from 'react';
import './css/Facts.css';

// import { animals } from './animals.js';


export default function Facts(props) {




    return (
        <div className='facts'>
            <h2 className={props.position}>{props.text}</h2>
        </div>
    )
}
