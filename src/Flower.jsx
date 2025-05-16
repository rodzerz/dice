import React, { useState, useEffect } from 'react';

const Flower = () => {
  const [petals, setPetals] = useState([]);
  const [pluckedCount, setPluckedCount] = useState(0);
  const [finished, setFinished] = useState(false);

  // Uzģenerē nejaušu ziedlapiņu skaitu un stāvokli "mīl"/"nemīl"
  useEffect(() => {
    const petalCount = Math.floor(Math.random() * 11) + 5; // 5 līdz 15 ziedlapiņas
    const sequence = Array.from({ length: petalCount }, (_, i) =>
      i % 2 === 0 ? 'mīl' : 'nemīl'
    );
    setPetals(sequence);
  }, []);

  const pluckPetal = () => {
    if (pluckedCount < petals.length) {
      setPluckedCount(prev => prev + 1);
    }
    if (pluckedCount + 1 === petals.length) {
      setFinished(true);
    }
  };

  const currentStatus = petals[pluckedCount];

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>🌸 Mīl vai nemīl?</h2>
      {!finished ? (
        <>
          <button onClick={pluckPetal} style={{ fontSize: '1.2rem' }}>
            Noraut ziedlapiņu
          </button>
          <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
            {pluckedCount > 0 && <span>{petals[pluckedCount - 1]}</span>}
          </p>
          <p>Ziedlapiņas palikušas: {petals.length - pluckedCount}</p>
        </>
      ) : (
        <h3>
          ✅ Rezultāts: <span>{petals[petals.length - 1]}!</span>
        </h3>
      )}
    </div>
  );
};

export default Flower;
