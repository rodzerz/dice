import { useState } from "react";

import "./coin.css";

import coin1 from "./assets/dice/dice-1.svg";
import coin2 from "./assets/dice/dice-2.svg";

const diceImages = [coin1, coin2];

function Coin() {

  const [coinValue, setCoinValue] = useState(4);

  function rollcoin() {

    const randomNumber = Math.floor(Math.random() * 6) + 1;

    setCoinValue(randomNumber);
  }

    return (
    
    <article className="coin">

      <h2>Metamā monēta</h2>

    <p>Jūs uzmejāt <strong>{coinValue}</strong></p>

    <button onClick={rollcoin}>Mest</button>

    <img
  src={coinImages[coinValue - 1]}
  alt={"Metamā monēta " + coinValue}
/>
    
    </article>
    
    );

   
  }
  export default Coin;