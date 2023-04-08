import {useState} from 'react'
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

function App() {
  const [todos,setTodos] = useState([
    {id: Math.random(),
    text: 'Learn JS',
    isCompleted:false},
    {id: Math.random(),
    text: 'Learn CSS',
    isCompleted:false},
    {id: Math.random(),
    text: 'Learn React',
    isCompleted:false}
  ])

  return (<div className = 'App'>
    <TodoForm onAdd = {(text) => {
      setTodos([
        ...todos,
      {
        id: Math.random(),
        text: text,
        isCompleted: false
      }
    ])

    }}/>
    <TodoList todos = {todos}/>
    <TodoFooter todos = {todos}/>
  </div>)
}

export default App;
