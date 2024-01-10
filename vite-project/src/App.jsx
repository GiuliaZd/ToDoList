import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import './App.css';

import TodoTable from './components/TodoTable';
import AgeCheck from './components/AgeCheck';
import Calculator from './components/Calculator';
import UserRegistration from './components/UserRegistration';


function App() {
  const [todo, setTodo] = useState({description: '', date: '', status: ''});
  const [todos, setTodos] = useState([]);

    // Column definitions for ag-grid
 const columnDefs = [
  { field: 'description', sortable: true, filter: true },
  { field: 'date', sortable: true, filter: true },
  { field: 'status', sortable: true, filter: true }
 ]

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({description: '', date: '', status: ''});
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  return (
    <>
    <h2>Todo list</h2>
      <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged} />
      <input placeholder="Date" name="date" value={todo.date} onChange={inputChanged}/>
      <input placeholder="Status" name="status" value={todo.status} onChange={inputChanged}/>
      <button onClick={addTodo}>Add</button>
      <div className="ag-theme-material" style={{height: 400, width: 600}}>
         <AgGridReact
            rowData={todos}
            columnDefs={columnDefs}
         />
      </div>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
      <AgeCheck />
      <Calculator />
      <UserRegistration />
    </>
  );
}

export default App;