import * as React from 'react';
import './style.css';

// vreau sa vad de 3 ori
// Test 1 ... 3
// BENI + DANI GRUP <=> 1..3
export default function App() {
  return (
    <div>
      <div>
        <span>TEST 1</span>
        <span>BENI + DANI GRUP {`<=>`} 1</span>
      </div>
      <div>
        <span>TEST 2 </span>
        <span>BENI + DANI GRUP {`<=>`}2</span>
      </div>
      <div>
        <span>TEST 3 </span>
        <span>BENI + DANI GRUP {`<=>`} 3</span>
      </div>

      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
