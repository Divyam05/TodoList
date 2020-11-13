import React from 'react';
import Todoitem from './list-items';
import './App.css';

function generateRandomId() {
  return Math.random().toString(36).substring(7);      
  
}
class App extends React.Component {
  constructor(props){
    super(props);
    const initialTodo = {
      id: generateRandomId(),                  
      content:'Divyam Grover',
      
    }
    this.state={
      todos: {
        [initialTodo.id]: initialTodo
      },
      name: "Employee",
      newtodo: ' ',
    }
  }
  render(){
  return (
    <div className="App">
      <h1  >{this.state.name} List</h1>
       <input type="text" className="textfield" placeholder="Enter Name"
       onChange={(event) =>{
         const value = event.target.value                 
         this.setState({
           newtodo :value                                       
         }) 
       }}
       
       />
       <button className="button" onClick={() =>{
         const todo = {
          id: generateRandomId(),
          content: this.state.newtodo,
          done: false
        }
         this.setState({
           todos: {
             ...this.state.todos,
             [todo.id]: todo
           }
          })
        }}>
    Add todo</button> 

   
  {Object.values(this.state.todos).map(todo => 
  <Todoitem 
  todo={todo}
  
  onDelete={() =>{
    this.setState((prevState) =>{

      const updatedTodos = prevState.todos
      delete updatedTodos[todo.id]                                

      return{
      todos: updatedTodos
      }
    })
   }}
  />
  )}
   
    </div>
      );
  }
}

export default App;
