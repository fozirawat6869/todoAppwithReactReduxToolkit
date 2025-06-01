import { useDispatch } from "react-redux"
import { removeTodo } from "../redux/slice/todoSlice"


function TodoItem({id,text}) {
    const dispatch=useDispatch()
    function remove(){
        dispatch(removeTodo(id))
    }
  return (
   <>
     <div>
        <p>{text}</p>
        <button onClick={remove}> X</button>
     </div>
   </>
  )
}

export default TodoItem;
