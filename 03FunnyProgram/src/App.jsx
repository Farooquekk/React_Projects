import { useState } from 'react';
import './App.css';

const App = () => {
  const [noPosition, setNoPosition] = useState({  });

  
  const handleYesClick = () => {
    
    alert(' Mujhe Phele hi pta ! 😂');
  };

  
  const handleNoHover = () => {
    const randomTop = Math.floor(Math.random() * window.innerHeight);
    const randomLeft = Math.floor(Math.random() * window.innerWidth);
    setNoPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="container">
      <h1>Are you a KDSB wala joker? 🤡</h1>
      <div className="buttons">
        <button className="yes-btn" style={{ top: `${noPosition.top -20}px`, left: `${noPosition.left-20}px` }} onClick={handleYesClick}>
          Yes
        </button>
        <button
          className="no-btn"
          style={{ top: `${noPosition.top}px`, left: `${noPosition.left}px` }}
          onClick={handleNoHover}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default App;
