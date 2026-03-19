import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type Post = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

const init: { data: Post[], status: string  } = { data: [], status: 'idle' }

export const fetchPosts = createAsyncThunk('post/fetcher',
    async ():Promise<Post[]> => {
       const res = await fetch('https://jsonplaceholder.typicode.com/posts');
       return await res.json();
    }
); 

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