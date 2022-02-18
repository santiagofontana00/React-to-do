import logo from './logo.svg';
import './App.css';
import AllTasks from './Components/AllTasks.js'
import Task from './Components/Task.js';
import React, { useState } from 'react';



function App() {
  return (
    <div className="App">
      <AllTasks />
    </div>
  );
}

export default App;
