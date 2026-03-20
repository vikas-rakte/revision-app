import { configureStore } from '@reduxjs/toolkit';
import PostSlice from './components/Posts/posts-slice/posts.slice';
import usersSlice from './components/Users/user-slice/user.slice';
import todosSlice from './components/Todos/todos-slice/todo.slice';
import counterSlice from './components/Counter/counter-slice/counter.slice';



// Export actions
export const { addTodo, toggleTodo, removeTodo, addManyTodos } = todosSlice.actions;
export const { increment,  decrement } = counterSlice.actions;
export const { addUser, addManyUsers } = usersSlice.actions;




// Configure the store
const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    counter: counterSlice.reducer,
    Posts: PostSlice.reducer,
    Users: usersSlice.reducer
  },
});

// Export store and types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
