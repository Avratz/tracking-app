import createDataContext from './createDataContext'
import trackerAPI from '../api/tracker'
import AsyncStorage from '@react-native-community/async-storage'

const sessionReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'SIGNIN':
			return { ...state, error: '', token: action.payload }
		case 'SIGNUP':
			return { ...state, error: '', token: action.payload }
		case 'SIGNOUT':
			return { ...state, error: '', token: '' }
		case 'ERROR':
			return { ...state, error: action.payload }
		case 'LOADING':
			return { ...state, loading: true }
		case 'NOT_LOADING':
			return { ...state, loading: false }
		default:
			return state
	}
}

const actions = {
	signin(dispatch: React.Dispatch<any>) {
		return async (email: string, password: string) => {
			try {
				const response = await trackerAPI.post('/signin', { email, password })
				await AsyncStorage.setItem('token', response.data.token)
				dispatch({ type: 'SIGNIN', payload: response.data.token })
			} catch (err) {
				dispatch({
					type: 'ERROR',
					payload: 'Revisa tu email y contraseña.',
				})
			}
		}
	},
	signup(dispatch: React.Dispatch<any>) {
		return async (email: string, password: string) => {
			try {
				const response = await trackerAPI.post('/signup', { email, password })
				await AsyncStorage.setItem('token', response.data.token)
				dispatch({ type: 'SIGNUP', payload: response.data.token })
			} catch (err) {
				dispatch({
					type: 'ERROR',
					payload:
						'Ha ocurrido un error al intentar crear la cuenta. Puede que ese Email ya exista.',
				})
			}
		}
	},
	signout(dispatch: React.Dispatch<any>) {
		return async () => {
			try {
				await AsyncStorage.removeItem('token')
				dispatch({ type: 'SIGNOUT' })
			} catch (err) {
				console.log(err)
			}
		}
	},
	clearError(dispatch: React.Dispatch<any>) {
		return () => dispatch({ type: 'ERROR', payload: '' })
	},
	autoLogin(dispatch: React.Dispatch<any>) {
		return async () => {
			try {
				const token = await AsyncStorage.getItem('token')
				if (token) {
					dispatch({ type: 'SIGNIN', payload: token })
				}
				dispatch({ type: 'NOT_LOADING' })
			} catch (err) {
				console.log(err)
			}
		}
	},
}

export const { Provider, Context } = createDataContext(
	sessionReducer,
	actions,
	{ token: null, loading: true }
)
