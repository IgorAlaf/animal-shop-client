export const getAuthUrl = (path: string) => {
	return `${process.env.API_URL}/auth/${path}`
}
