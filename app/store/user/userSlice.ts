import { createSlice } from '@reduxjs/toolkit'
import { IState } from './user.interface'
import { register, login, logout, checkAuth } from './user.actions'

const initialState: IState = {
	user: null,
	isLoading: false,
	errors: ''
}

const userSlice = createSlice({
	name: 'userReducer',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false
				state.user = null
				state.errors = action.error?.message || ''
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false
				state.user = null
				state.errors = action.error?.message || ''
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.user = payload.user
			})
	}
})

export default userSlice
