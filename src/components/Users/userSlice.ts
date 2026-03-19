import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { User } from "./UserType";


// ✅ Adapter
const userDataAdapter = createEntityAdapter<User>({
  sortComparer: (a, b) => a.id - b.id
});

// ✅ Initial state (with extra fields optional)
const initialState = userDataAdapter.getInitialState({
  loading: false,
  error: null as string | null
});

// ✅ Slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: userDataAdapter.addOne,
    addManyUsers: userDataAdapter.addMany,
    updateUser: userDataAdapter.updateOne,
    removeUser: userDataAdapter.removeOne,
    setUsers: userDataAdapter.setAll
  }
});



// ✅ Export reducer
export default usersSlice;