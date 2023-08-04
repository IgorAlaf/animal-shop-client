import { toastr } from 'react-redux-toastr'
import { errorCatch } from '../api/api.helper'

export const toastrError = (error: any, title?: string) => {
	const message = errorCatch(error)
	toastr.error(title || 'Eroor request', message)
	throw message
}
