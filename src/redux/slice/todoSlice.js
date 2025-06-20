import {createSlice} from '@reduxjs/toolkit'


const todoSlice=createSlice({
      name:"todos",
      initialState:{
        todos:[]
      },
      reducers: {
        addTodo:(state,action)=>{
            state.todos.push({id:Date.now(),text:action.payload})
        },
        removeTodo:(state,action)=>{
            state.todos= state.todos.filter(todo=>todo.id!==action.payload)
        }
    }
})

export const {addTodo,removeTodo}=todoSlice.actions;
export default todoSlice.reducer;