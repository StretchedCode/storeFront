import React from 'react';
import './stylesheets/App.scss';
import bgImage from './assets/cnTowerImage.jpg'
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
function App() {

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex">

        </div>
        
        <div className="bg-[url('../assets/cnTowerImage.jpg')]">

          <div className="grid grid-cols-3 h-screen">

            <div className="flex justify-center items-center bg-black opacity-70">

              <div className="opacity-100 text-white font-extrabold text-7xl px-5">
                Life is short, so isn't it worth living to the fullest?

              </div>

            </div>

          </div>

        </div>

      </div>
      
    </div>
  );
}

export default App;
