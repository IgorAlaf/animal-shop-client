export interface IState {
	user: IUser | null
	errors: string
	isLoading: boolean
}

export interface IUser {
	email: string
	name: string
	surname: string
	phone: string
	city: string
}
