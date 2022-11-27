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



export const getTickets = createAsyncThunk('tickets/getTickets', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await ticketService.getTickets(token)
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
    builder
      .addCase(createTicket.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createTicket.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(getTickets.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tickets = action.payload
      })
      .addCase(getTickets.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})




export const { reset } = ticketSlice.actions
export default ticketSlice.reducer
