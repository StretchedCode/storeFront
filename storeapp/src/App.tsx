import React from 'react';
import './stylesheets/App.scss';
import bgImage from './assets/cnTowerImage.jpg'
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Button } from './components/button';
import Taskbar from './components/homebar';
import Home from './components/home';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
      <div className="flex flex-col">

        <Taskbar></Taskbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>

      </div>

    </div>
  );
}

export default App;
