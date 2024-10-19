
import './App.css';
import React from 'react';


import { Tooltip } from 'react-tooltip'

function App() {
  return (
    <div className="App"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#f0f8ff',
    }}>
      <a style={{
      margin: '2vh',
    }}
        data-tooltip-id="swap-tooltip"
        data-tooltip-content="Hello Ninjas"
        data-tooltip-place="bottom"
      >
        
        Bottom Hover 
      </a>
      <a style={{
      margin: '2vh',
    }}
        data-tooltip-id="swap-tooltip"
        data-tooltip-content="Hello Ninjas"
        data-tooltip-place="top"
      >
        
        TOP Hover 
      </a>

      <a style={{
      margin: '2vh',
    }}
        data-tooltip-id="swap-tooltip"
        data-tooltip-content="Hello Ninjas"
        data-tooltip-place="left"
      >
        
        LEFT Hover 
      </a>

      <a style={{
      margin: '2vh',
    }}
        data-tooltip-id="swap-tooltip"
        data-tooltip-content="Hello Ninjas"
        data-tooltip-place="right"
      >
        
        RIGHT Hover 
      </a>
      
      <Tooltip id="swap-tooltip" />
    </div>
  );
}

export default App;
