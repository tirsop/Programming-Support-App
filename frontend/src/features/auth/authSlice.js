import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    return await authService.register(user)
  } catch (err) {
    const message = err.response?.data?.message ? || err.message || err.toString()
  }
})
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  console.log(user)
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => { },
})

export default authSlice.reducer