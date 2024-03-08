import React, { useState } from 'react';
import { animals } from './animals';
import './css/Images.css';
import Facts from './Facts';


export default function Images(props) {

  // const [text, setText] = useState('')


  // const funFact = (e) => {
  //   setText('')
  //   const factOf = e.target.alt;
  //   const num = animals[factOf].facts.length;
  //   const index = Math.floor(Math.random() * num);
  //   setText(animals[factOf].facts[index]);
  //   console.log(text);
  // }

  // <Facts text={text} />


  return (
    <div className='animals'>
      {Object.entries(animals).map((item) => {
        return <img className={`animal`} src={item[1].image} onClick={props.onclick} alt={item[0]} />
      })}
      {/* <Facts text={text} /> */}

    </div>
  )
}
