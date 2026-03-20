import { createSlice, createEntityAdapter, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../store";

// ✅ Todo type
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// ✅ Entity Adapter (🔥 big upgrade)
const todosAdapter = createEntityAdapter<Todo>({
  sortComparer: (a, b) => b.id - a.id, // newest first
});

// ✅ Initial state
const initialState = todosAdapter.getInitialState();

// ✅ Slice
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // ✅ Add todo
    addTodo: {
      reducer: todosAdapter.addOne,
      prepare: (title: string) => ({
        payload: {
          id: Date.now(), // better: use uuid in real apps
          userId: Math.floor(Math.random() * 1000),
          title,
          completed: false,
        },
      }),
    },

    // ✅ Toggle
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.entities[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    // ✅ Remove
    removeTodo: todosAdapter.removeOne,

    // ✅ Add many (correct merge)
    addManyTodos: todosAdapter.upsertMany,

    // ✅ Replace all (explicit)
    setTodos: todosAdapter.setAll,

    // ✅ Reset
    resetTodos: () => initialState,
  },
});

// ✅ Export actions
export const {
  addTodo,
  toggleTodo,
  removeTodo,
  addManyTodos,
  setTodos,
  resetTodos,
} = todosSlice.actions;

// ✅ Export reducer
export default todosSlice;

// ✅ Selectors (VERY IMPORTANT)
export const todosSelectors = todosAdapter.getSelectors(
  (state: RootState) => state.todos
);