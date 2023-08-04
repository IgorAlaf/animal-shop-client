import { errorCatch } from '@/app/api/api.helper'
import {
	IAuthLogin,
	IAuthRegister,
	IAuthResponse
} from '@/app/services/auth/auth.interface'
import { authService } from '@/app/services/auth/authService'
// import { toastrError } from '@/app/utils/toastr-error'
import { createAsyncThunk } from '@reduxjs/toolkit'
// import { toastr } from 'react-redux-toastr'
export const register = createAsyncThunk<IAuthResponse, IAuthRegister>(
	'auth/register',
	async ({ name, surname, email, password, phone, city }, thunkApi) => {
		try {
			// const response = await authService.register({
			// 	name,
			// 	surname,
			// 	email,
			// 	password,
			// 	phone,
			// 	city
			// })
			const data: IAuthResponse = {
				user: {
					name,
					surname,
					email,
					phone,
					city
				},
				accessToken: 'hello',
				refreshToken: 'hello'
			}
			// toastr.success('Register', 'Completed successfully')
			// return response.data
			return data
		} catch (error) {
			// toastrError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IAuthLogin>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			// const response = await authService.login({ email, password })
			const data: IAuthResponse = {
				user: {
					name: 'Igor',
					surname: 'Alafinov',
					email,
					phone: '+79141787230',
					city: 'Khabarovsk'
				},
				accessToken: 'hello',
				refreshToken: 'hello'
			}
			// toastr.success('Login', 'Completed successfully')
			//return response.data
			return data
		} catch (error) {
			// toastrError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await authService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/checkAuth',
	async (_, thunkApi) => {
		try {
			const response = await authService.refresh()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				// toastr.error(
				// 	'Logout',
				// 	'Your authorization is finished, plz sign in again'
				// )
				thunkApi.dispatch(logout())
			}
			// toastrError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)
