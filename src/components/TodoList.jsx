import { useSelector } from "react-redux"
import TodoItem from "./TodoItem";


function TodoList() {
    const data=useSelector(state=>state.todos.todos);

  return (
   <>
     <div>
        <h1>Todo List :- </h1>
        {data.map(todoItem=><TodoItem key={todoItem.id} id={todoItem.id} text={todoItem.text} />)}
     </div>
   </>
  )
}

export default TodoList