import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import ReactiveButton from 'reactive-button';

import TodoTable from './TodoTable';
import AgeCheck from './AgeCheck';
import Calculator from './Calculator';
import UserRegistration from './UserRegistration';


function Todolist() {
  const [todo, setTodo] = useState({description: '', date: '', status: ''});
  const [todos, setTodos] = useState([]);

    // Column definitions for ag-grid
 const columnDefs = [
  { field: 'description', sortable: true, filter: true, suppressMovable: true},
  { field: 'date', sortable: true, filter: true, suppressMovable: true},
  { field: 'status', sortable: true, filter: true, suppressMovable: true}
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
      
      <ReactiveButton idleText="Add" color="primary" rounded="true" style={{marginLeft:10}} onClick={addTodo} />
      <div className="ag-theme-material" style={{height: 400, width: 600}}>
         <AgGridReact
            animateRows={true}
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

export default Todolist;