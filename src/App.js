import logo from './logo.svg';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';
import { useState } from 'react';
import { createContext } from 'react';

export const RingContext=createContext('Ring');

function App() {
  const [house,setHouse]=useState(2);
  const ornaments='diamond Ring';
  return (
    <RingContext.Provider value={ornaments}>
       <div className="App">
          <button onClick={()=>setHouse(house+1)}>Buy a new house</button>
          <GrandFather house={house} ornaments={ornaments}></GrandFather>
        </div>
    </RingContext.Provider>
  );
}

export default App;
