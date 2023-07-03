import React from 'react';
import './stylesheets/App.scss';
import bgVideo from "./assets/cityScape.mp4"
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
function App() {

  return (
    <>

      <div className='flex bg-slate-100 p-6'>Tool bar</div>

      <div className="">
          <video src={bgVideo} autoPlay loop muted className="min-w-full p-0"></video>
      </div>

    </>
  );
}

export default App;
