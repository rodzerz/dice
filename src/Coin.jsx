import React, { useState } from 'react';
import './Coin.css';  // Ielādējam CSS failu
import headsImage from './assets/dice/heads.jpg';
import tailsImage from './assets/dice/tails.jpg';

function Coin() {
  const [flipResult, setFlipResult] = useState(null); // Sākotnējais rezultāts ir null

  // Funkcija monētas mešanai
  const flipCoin = () => {
    const result = Math.random() < 0.5 ? 'heads' : 'tails'; // Nejaušs rezultāts
    setFlipResult(result); // Atjauno rezultātu
  };

  return (
    <div className="coin-container">
      <h2>Monētas mešana 🪙</h2>
      <div className="coin" onClick={flipCoin}>
        {flipResult === 'heads' && <img src={headsImage} alt="Heads" />} 
        {flipResult === 'tails' && <img src={tailsImage} alt="Tails" />}
      </div>
      <p>{flipResult ? `Iznākums: ${flipResult}` : "Pieskaries monētai, lai mestu!"}</p>
    </div>
  );
}

export default Coin;
