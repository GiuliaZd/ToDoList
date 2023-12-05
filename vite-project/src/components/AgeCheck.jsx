import { useState } from 'react';

function AgeCheck() {
    const [ageCheck, setAgeCheck] = useState({name: '', age: 0});
    const inputChanged = (event) => {
        setAgeCheck({...ageCheck, [event.target.name]: event.target.value});
    }
    const showAlert = ()=>{
        if (ageCheck.age>=18){
        alert(`Hello ${ageCheck.name}`);}
        else {alert(`You are too young`)}

    }

  return (
    <>
     <p>Name: {ageCheck.name} Age: {ageCheck.age}</p>
    <input placeholder="Name" name="name" value={ageCheck.name} onChange={inputChanged} />
    <input placeholder="Age" name="age" value={ageCheck.age} onChange={inputChanged} />
    <button onClick={showAlert}>Check Age</button>
     </>
 );
}

export default AgeCheck;