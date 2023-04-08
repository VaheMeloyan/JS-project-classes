function TodoFooter ({todos}){
    return(
       <div>
         <span> 1/{todos.length} Completed</span>
        <button>Clear Completed</button>
       </div>
    )
}
export default TodoFooter