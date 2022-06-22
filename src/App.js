import "./styles.css";
import { useEffect, useState } from "react";

// https://7leu5b4x2b.execute-api.ap-southeast-1.amazonaws.com/dev/arithmetic/add
// https://7leu5b4x2b.execute-api.ap-southeast-1.amazonaws.com/dev/arithmetic/subtract
// https://7leu5b4x2b.execute-api.ap-southeast-1.amazonaws.com/dev/arithmetic/multiply
// https://7leu5b4x2b.execute-api.ap-southeast-1.amazonaws.com/dev/arithmetic/divide

export default function App() {
  const [currentValue, newValue] = useState();

  return (
    <div className="App">
      <div id="root">
        <div className="App">
          <h3 className="">0</h3>
          <h3> *</h3>
          <h1 className="">0</h1>
          <div>
            <button className=""> 7 </button>
            <button className=""> 8 </button>
            <button className=""> 9 </button>
          </div>
          <div>
            <button className=""> 4 </button>
            <button className=""> 5 </button>
            <button className=""> 6 </button>
          </div>
          <div>
            <button className=""> 1 </button>
            <button className=""> 2 </button>
            <button className=""> 3 </button>
          </div>
          <div>
            <button className=""> 0 </button>
          </div>
          <div>
            <button className=""> + </button>
            <button className=""> - </button>
            <button className=""> * </button>
            <button className=""> / </button>
          </div>
          <div>
            <button className=""> = </button>
            <button className=""> C </button>
          </div>
        </div>
      </div>
    </div>
  );
}
