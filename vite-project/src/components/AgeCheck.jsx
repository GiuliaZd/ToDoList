import { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

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
    <h2>Age check</h2>
    <p>Name: {ageCheck.name} Age: {ageCheck.age}</p>
    <input placeholder="Name" name="name" value={ageCheck.name} onChange={inputChanged} />
    <input placeholder="Age" name="age" value={ageCheck.age} onChange={inputChanged} />
    <Button onClick={showAlert} >Check Age</Button>
     </>
 );
}

export default AgeCheck;