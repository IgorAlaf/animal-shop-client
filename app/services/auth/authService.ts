import { AxiosResponse } from 'axios'
import { IAuthLogin, IAuthRegister, IAuthResponse } from './auth.interface'
import { axiosClassic } from '@/app/api/interceptors'
import { getAuthUrl } from '@/app/config/api.config'

export const authService = {
	async register({
		name,
		surname,
		email,
		password,
		phone,
		city
	}: IAuthRegister): Promise<AxiosResponse<IAuthResponse>> {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/register'),
			{
				name,
				surname,
				email,
				password,
				phone,
				address: city
			}
		)
		if (response.data) {
			//
		}
		return response
	},
	async login({
		email,
		password
	}: IAuthLogin): Promise<AxiosResponse<IAuthResponse>> {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/login'),
			{ email, password }
		)
		if (response.data) {
			//
		}
		return response
	},
	async logout() {
		//
	},
	async refresh(): Promise<AxiosResponse<IAuthResponse>> {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/refresh'),
			{}
		)
		if (response.data) {
		}
		return response
	}
}
