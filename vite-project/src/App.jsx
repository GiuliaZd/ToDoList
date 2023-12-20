import { useState } from 'react';
import TodoTable from './components/TodoTable';
import AgeCheck from './components/AgeCheck';
import Calculator from './components/Calculator';
import UserRegistration from './components/UserRegistration';
import './App.css';

function App() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({description: '', date: ''});
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  return (
    <>
    <p>Todo list</p>
      <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged} />
      <input placeholder="Date" name="date" value={todo.date} onChange={inputChanged}/>
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
      <AgeCheck />
      <Calculator />
      <UserRegistration />
    </>
  );
}

export default App;