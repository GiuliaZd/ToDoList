import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoTable(props) {
  return(
    <>
    
      <table>
        <tbody>
        {
        props.todos.map((todo, index) => 
         <tr key={index}>
           <td>{todo.description}</td>
           <td>{todo.date}</td>
           <td>{todo.status}</td>
           <td><IconButton onClick={() => props.deleteTodo(index)} size="small" color="error" variant='outlined'>Delete
           <DeleteIcon />
           </IconButton></td>
         </tr>)
         }
         </tbody>
      </table> 
    </>
  );
}

export default TodoTable;