
import { useState } from "react";


function Dice() {
    const [diceValue, setDiceValue] = useState(4);

    function rollDice() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        console.log("Kauliņš izmests", randomNumber);
        <p>Jūs uzmetāt <strong>{diceValue}</strong></p>
      }

    return <h2>Metamais kauliņš</h2>;
    <button onClick={rollDice}>Mest</button>
  }

  export default Dice;               