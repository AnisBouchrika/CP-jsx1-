import React from 'react';

import './styles.css';

import imageInSrc from "./imageInSrc.jpg"



function App() {
  return (
  <div className="App">

    <div className="container">

        <h1  className="title-red" >ANIS</h1>



        <img className='image' src={imageInSrc}  alt='imageInSrc' />



        <img className='image' src="/imageInPublic.jpg" alt='imageInPublic'/>
        <iframe className="vid1" width="320" height="240" src="https://www.youtube.com/embed/rUWxSEwctFU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

  </div>
  );
}

export default App;