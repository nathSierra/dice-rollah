import React from 'react';
import './App.css';
import DiceRoll from './components/Dice';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DiceHolder = styled.div`
  flex-direction: column;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%);
`

function App() {
  return (
    <DiceHolder className="App">
      <DiceRoll max={20}/>
      <DiceRoll max={12}/>
      <DiceRoll max={10}/>
      <DiceRoll max={8}/>
      <DiceRoll max={6}/>
      <DiceRoll max={4}/>
    </DiceHolder>
  );
}

export default App;
