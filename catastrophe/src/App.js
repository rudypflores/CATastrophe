import React, { useState } from 'react';
import './App.css';
import extractFramesFromVideo from './frameExtractor';

const App = () => {

  const [video, setVideo] = useState('');

  const extract = async (event) => {
    setVideo(video+event.target.value);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    const cors = 'https://cors-anywhere.herokuapp.com/';

    let frames = await extractFramesFromVideo(`${cors}${video}`);

    for(let i of frames) {
      setTimeout(() => {
        let img = document.getElementById('temp');
        img.src = i;
      }, 3000);
    }
  }

  return (
    <React.Fragment>
      {/* App Bar */}
      <div id="app-bar">
        <h1 id="title">CATastrophe</h1>
      </div>
      <div id="content">
        <form id="form" onSubmit={handleSubmit}>
          <input id="input" value={video} type="text" name="video" onChange={extract}/>
          <input type="submit"/>
        </form>
        <img src='' id="temp"/>
      </div>
    </React.Fragment>
  );
}
 
export default App;
