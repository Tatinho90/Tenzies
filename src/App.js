import logo from './logo.svg';
import './App.css';
import Dice from "./components/Die";
import React from "react"
import Confetti from 'react-confetti'




function App() {



  const [dice, setDice] = React.useState(tenRandom());
  const [tenzies, setTenzies] = React.useState(false);
  const [rolls, setRolls] = React.useState(0)

  React.useEffect(() =>  {
  const firstValue= dice[0].value;
  const areAllSame = dice.every(x => firstValue === x.value);
  const areAllHeld= dice.every(y => y.isHeld)
  if (areAllSame && areAllHeld){
    setTenzies(true);
console.log("you won the game")
  } }
  , [dice]) ;


function tenRandom(){
  let result= [];
  for (let x=0; x<10; x++){
    let toBePushed= {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: x+1,
     }
    result.push(toBePushed)
  }
  return result;
}

function holdDice(id){
  setDice(prev => prev.map(old => {
    return id === old.id? {...old, isHeld: !old.isHeld}: old
  }) )
}



const diceValue= dice.map((number, i) => <Dice key={number.id} value={number.value} isHeld={number.isHeld} function={holdDice} id={number.id}/> )

function rollDice(){
  if (tenzies){
   setDice(tenRandom());
   setTenzies(false)
   setRolls(0);
  }
  else {
    setDice(prev => prev.map(previous => {
      return previous.isHeld ? previous : {...previous, value: Math.ceil(Math.random() * 6)};
    }
    ))
    setRolls(prev => prev +1 )
  }
}


  return (
    <div className="App">
      {tenzies && <Confetti/>}
     <h1>Tenzies</h1>
     <h2>Roll dices until all dice are the same. Click each dice to freeze it at its current value between rolls.</h2>
     <div className="rolls">
      <h2>Number of Rolls: <strong>{rolls}</strong></h2>
     </div>

      <div className="grid-container">
     {diceValue} 
      </div>
        <div className="centering">
          <button onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
          </div>
    </div>
  );
}

export default App;
