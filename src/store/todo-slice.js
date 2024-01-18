import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "toods",
  initialState: {
    todos: [
      { id: "1", title: "Todo 1" },
      { id: "2", title: "Todo 2" },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
