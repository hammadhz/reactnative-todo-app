// src/store/todoSlice.js

import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      AsyncStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      AsyncStorage.setItem("todos", JSON.stringify(state.todos));
    },
    completeTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
        AsyncStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    loadTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;

export const fetchTodos = () => async (dispatch) => {
  try {
    const todos = await AsyncStorage.getItem("todos");
    if (todos !== null) {
      dispatch(loadTodos(JSON.parse(todos)));
    }
  } catch (error) {
    console.error("Error fetching todos from AsyncStorage:", error);
  }
};
