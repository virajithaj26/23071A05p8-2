import { useState } from 'react';

export default function RandomGenerator() {
  const [number, setNumber] = useState(null);

  const generateRandom = () => {
    setNumber(Math.floor(Math.random() * 100));
  };

  return (
    <div className="p-4">
      <h2>Random Number Generator</h2>
      <button onClick={generateRandom}>Generate</button>
      {number !== null && <p>Random Number: {number}</p>}
    </div>
  );
}
