import { useState } from 'react';

function Calculator() {
    const [num1, setNum1] = useState ('');
    const [num2, setNum2] =useState ('');
    const [result, setResult]=useState(null);

    const inputChanged = (event, setNumber) => {
        setNumber(event.target.value);
    }
    const calculate =(operation)=>{
      switch (operation){
        case 'add':
          setResult(`${Number(num1)+Number(num2)}`);
          break;
        case 'subtract':
          setResult(`${Number(num1)-Number(num2)}`);
          break;
      }
  }
  /* const [numA, setNumA ] = useState(0);
  const [numB, setNumB ] = useState(0);
  const [result, setResult] = useState(0);

  const inputChangedA = (event) => {
    setNumA(event.target.value);
  }

  const inputChangedB = (event) => {
    setNumB(event.target.value);
  }

  const calcSum = () => {
    setResult(Number(numA) + Number(numB))
  }

  const calcSub = () => {
    setResult(Number(numA) - Number(numB))
  }

  return (
    <>
      <p>Result = {result}</p>
      <input value={numA} onChange={inputChangedA} />
      <input value={numB} onChange={inputChangedB} />
      <button onClick={calcSum}>+</button>
      <button onClick={calcSub}>-</button>
    </>
  );
} */
  return (
    <>
    <p>Calculator</p>
    <p>Result = {result}</p>
    <input placeholder="Number 1" name="num1" value={num1} onChange={(event) => inputChanged(event, setNum1)}/>
    <input placeholder="Number 2" name="num2" value={num2} onChange={(event) => inputChanged(event, setNum2)} />
    <button onClick={() => calculate('add')}>+</button>
    <button onClick={() => calculate('subtract')}>-</button> 
     </>
 );
}

export default Calculator;