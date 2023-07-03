import React from 'react';
import './stylesheets/App.scss';
import bgImage from './assets/cnTowerImage.jpg'
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
function App() {

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex bg-cyan-200">Toolbar</div>
        <AspectRatio ratio={16 / 9}>
          <img src={bgImage}></img>
        </AspectRatio>
      </div>
    </div>
  );
}

export default App;
