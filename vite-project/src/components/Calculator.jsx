import { useState } from 'react';

function Calculator() {
    const [numbers, setNumbers] = useState({num1: 0, num2: 0});
    const inputChanged = (event) => {
        setNumbers({...numbers, [event.target.name]: event.target.value});
    }
    const calcSum =()=>{
        

    }
    const calcSubtract =()=>{
        

    }
  return (
    <>
    <p>Calculator</p>
    <input placeholder="Number 1" name="num1" value={numbers.num1} onChange={inputChanged} />
    <input placeholder="Number 2" name="num2" value={numbers.num2} onChange={inputChanged} />
    <button onClick={calcSum}>+</button>
    <button onClick={calcSubtract}>-</button> 
    
     </>
 );
}

export default Calculator;