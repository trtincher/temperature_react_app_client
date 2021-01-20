import React, { useState, useEffect } from 'react';
import BarChart from './components/BarChart.js'
import './App.css';

function App() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await fetch('http://localhost:3000/locations')
        const json = await res.json()
        console.log('json', json)
        setLocations(json)
      } catch (err) {
        console.error(err)
      }
    }
    makeAPICall()
  }, [])

  return (
    <div className="App">
      <BarChart location={locations[0]} />
    </div>
  );
}

export default App;