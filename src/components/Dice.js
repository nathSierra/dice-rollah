import React, { useState } from 'react';
import styled from 'styled-components';



const Button = styled.button`
  border-radius: 10px;
  border-color: yellow;
  background-color: mediumseagreen;
  font-size: 1rem;
  &:hover {
    background-color: violet;
  }
  width: 10rem;
`

const Card = styled.div`
  width: 10rem;
  padding: 20px;
  background-color: darkslategray;
  color: white;
  font-size: 1rem;
  border-color: darkorchid;
  border-style: solid;
`

function getRandomInt(max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - 1 + 1) + 1);
}

function DiceRoll( props ) {
  const [rollNum, setNum] = useState(0);

  const rolls= [];
  return (
    <Card>
      <h1>
        Roll a D{props.max}
      </h1>
      You rolled a : {rollNum}
      <br />
      <Button onClick={() => 
        setNum(getRandomInt(props.max))}>
        CLICK
      </Button>
      <hr></hr>
    </Card>
  )
}


export default DiceRoll