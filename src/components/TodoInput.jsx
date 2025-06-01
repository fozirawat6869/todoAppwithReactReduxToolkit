import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addTodo } from "../redux/slice/todoSlice"


function TodoInput() {
   const [todo,setTodo]=useState('')

   const dispatch=useDispatch()

    function add(){
        if(todo===""){
          alert("plz type something to add in todo list");
          return
        }
        dispatch(addTodo(todo))
        setTodo("")
    }
  return (
    <>
     <div>
        <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo}/>
        <button onClick={add}>Add Todo</button>
     </div>
    </>
  )
}

export default TodoInput