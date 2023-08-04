import { IUser } from '@/app/store/user/user.interface'

export interface IAuthRegister {
	name: string
	surname: string
	email: string
	password: string
	phone: string
	city: string
}

export interface IAuthLogin {
	email: string
	password: string
}

export interface IAuthResponse {
	accessToken: string
	refreshToken: string
	user: IUser
}
