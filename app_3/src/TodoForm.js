import {useState} from 'react'
function TodoForm({onAdd}){
    const[text,setText] = useState('')
return(
    <form onSubmit = {(event) => {
        event.preventDefault()
        onAdd(text) 
        setText('')
    }}>
        <input type = 'text' value = {text} onChange = {(event) =>{
            setText(event.target.value)
        }
        }/>
        <button>Add</button>
    </form>
)
}

export default TodoForm