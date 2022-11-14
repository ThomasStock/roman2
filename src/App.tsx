import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  const roman = getRoman(number);

  return (
    <div className="App">
      <input
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <h2>{roman}</h2>
    </div>
  );
}

export default App;

const getRoman = (number: any) => number;
