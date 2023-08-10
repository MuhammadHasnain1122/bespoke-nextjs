import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUsers = createAsyncThunk(
  "users/getAllUsers",
  async (thunkApi) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const data = await response.json();
    return data;
  }
);
const initialState = {
  entities: [],
  loading: false,
  value: 10,
} as any;
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updatePost: (state, action) => {
      const { id, updatedData } = action.payload;
      const postIndex = state.entities.findIndex((post: any) => post.id === id);
      if (postIndex !== -1) {
        const updatedPost = {
          ...state.entities[postIndex],
          ...updatedData,
        };
        state.entities[postIndex] = updatedPost;
      } else {
        console.error(`Post with id ${id} not found.`);
      }
    },
    deletePost: (state, action) => {
      const postId = action.payload;
      state.entities = state.entities.filter((post: any) => post.id !== postId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.entities.push(...action.payload);
    })
  }

  })

  export const { updatePost, deletePost } = userSlice.actions;

export default userSlice.reducer;