import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './components/CounterSlice/counterSlice';
import PostSlice from './components/Posts/PostsSlice';
import usersSlice from './components/Users/UserSlice/userSlice';
import todosSlice from './components/Todos/Slice/todoSlice';



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
