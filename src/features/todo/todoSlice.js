import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{}],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo:(state,action)=>{
      const {id, newText} = action.payload
      const todoUpdate = state.todos.find(todo=>todo.id ===id);
      if(todoUpdate){
        todoUpdate.text =  newText
      }

    }
  },
});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer
