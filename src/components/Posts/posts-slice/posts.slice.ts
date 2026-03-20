import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Post } from "../posts.types";
import { getPosts } from "../posts.api";



const init: { data: Post[], status: string  } = { data: [], status: 'idle' }

export const fetchPosts = createAsyncThunk('post/fetcher',getPosts); 

const PostSlice = createSlice({
    name: 'Posts',
    initialState: init,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchPosts.pending, ( state => {
            state.status = 'loading'
        }))
        .addCase(fetchPosts.fulfilled, ((state, action) => {
            state.data = action.payload;
            state.status = 'success';
        }))
        .addCase(fetchPosts.rejected, ((state)=>{
            state.status = 'rejected';
        }))
    },
})

export default PostSlice;