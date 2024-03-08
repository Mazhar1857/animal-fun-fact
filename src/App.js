import './App.css';
import Background from './component/Background';
import Title from './component/Title';
import Images from './component/Images';
import Facts from './component/Facts';
import { useState } from 'react';
import { animals } from './component/animals';

function App() {

  const [text, setText] = useState('')

  const [position, setPosition] = useState('')

  const update = () => {

  }


  const funFact = (e) => {

    const factOf = e.target.alt;
    const num = animals[factOf].facts.length;
    const index = Math.floor(Math.random() * num);
    setText(animals[factOf].facts[index]);
    console.log(text);
    setPosition(factOf);
  }

  return (
    <>
      <div className='main'>

        <div className='bg'>
          <Background />
        </div>

        <div className='title'>
          <Title />
        </div>

        <div className='facts-app'>
          <Facts text={text} position={position}/>
        </div>

        <div className='images'>
          <Images onclick={funFact} />
        </div>

      </div>
    </>

  );
}

export default App;
