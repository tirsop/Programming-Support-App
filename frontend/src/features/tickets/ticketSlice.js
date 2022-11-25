import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import ticketService from "./ticketService"

const initialState = {
  tickets: [],
  ticket: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}




export const createTicket = createAsyncThunk('tickets/create', async (ticketData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await ticketService.createTicket(ticketData, token)
  } catch (err) {
    const message = err.response?.data?.message || err.message || err.toString()
    return thunkAPI.rejectWithValue(message)
  }
})



export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {

  }
})

export const { reset } = ticketSlice.actions
export default ticketSlice.reducer