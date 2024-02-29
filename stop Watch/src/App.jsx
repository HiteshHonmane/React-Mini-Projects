import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleLap = () => {
    setLaps([...laps, time]);
  };
  const handleReset = () => {
    setTime(0);
    setLaps([]);
  };

  const handleRunning=() =>{
   setRunning(false)
   
  }

  const formatTime = (time) => {
    return (
      ("0" + Math.floor((time / 60000) % 60)).slice(-2) +
      ":" +
      ("0" + Math.floor((time / 1000) % 60)).slice(-2) +
      ":" +
      ("0" + ((time / 10) % 100)).slice(-2)
    );
  };

  return (
    <>
      <h1>Stop Watch</h1>
      <div>
        <span>{formatTime(time)}</span>
      </div>
      <div>
        {running ? (
          <button onClick={() => setRunning(false)}>Stop</button>
        ) : (
          <button onClick={() => setRunning(true)}>Start</button>
        )}
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleLap}>Lap</button>
      </div>
      <div>
        <h2>Lap Times:</h2>
        <ol>
          {laps.map((lapTime, index) => (
            <li className="st" key={index}>{formatTime(lapTime)}</li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;

