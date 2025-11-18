import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuAppBar from './components/Header';
import BasicGrid from './components/Grid/Grid';
import Button from '@mui/material/Button';
import BasicButtons from './components/Button1';
import StarCursor from './components/StarCursor';
import StarTrailCursor from './components/StarTrailCursor';



function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <BasicGrid />
 <div>
      <StarCursor /> {/* Добавьте курсор поверх всего */}
      {/* <YourMainContent /> */}
    </div>
        <div>
      <StarTrailCursor />
  
    </div>
    </div>
  );
}

export default App;
