import { useState } from 'react';

function UserRegistration() {
  const [user, setUser] = useState({firstName: '', lastName: '', email:'', phone:''});
  const inputChanged = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  }
  const showAlert = (e) => {
    const { firstName, lastName, email, phone } = user;
    if (!firstName || !lastName || !email || !phone) {
      alert('All fields are required');
    } else {
      alert(`Welcome ${firstName} ${lastName}`); 
    }
  };

  return (
    <>
    <p>User registration</p>
      <input placeholder="First name" name="firstName" value={user.firstName} onChange={inputChanged}/><br />
      <input placeholder="Last name"name="lastName" value={user.lastName} onChange={inputChanged}/><br />
      <input placeholder="Email" name="email" value={user.email} onChange={inputChanged}/><br />
      <input placeholder="Phone" name="phone" value={user.number} onChange={inputChanged}/><br />
      <button onClick={showAlert}>Submit</button>
    </>
 );
}

export default UserRegistration;