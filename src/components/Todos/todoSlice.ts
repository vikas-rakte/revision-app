import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// ✅ Todo type
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// ✅ Initial state
const initialState: Todo[] = [];

// ✅ Slice
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // ✅ Add todo
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: Date.now(),
        userId: Math.floor(Math.random() * 1000), // better random
        title: action.payload,
        completed: false
      });
    },

    // ✅ Toggle
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    // ✅ Remove (mutation style)
    removeTodo: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((t) => t.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },

    // ✅ Add many (append instead of replace)
    addManyTodos: (state, action: PayloadAction<Todo[]>) => {
      state.push(...action.payload);
    },

    // ✅ Reset (extra useful)
    resetTodos: () => {
      return [];
    }
  }
});

// ✅ Export actions
export const {
  addTodo,
  toggleTodo,
  removeTodo,
  addManyTodos,
  resetTodos
} = todosSlice.actions;

// ✅ Export reducer
export default todosSlice;