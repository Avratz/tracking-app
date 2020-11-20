import createDataContext from './createDataContext'
import api from '../api/tracker'

const trackReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'GET_TRACKS':
			return action.payload
		default:
			return state
	}
}

const actions = {
	getTracks(dispatch: React.Dispatch<any>) {
		return async (name) => {
			try {
				const response = await api.get('/tracks')
				dispatch({ type: 'GET_TRACKS', payload: response.data })
			} catch (err) {
				console.log(err)
			}
		}
	},
	createTrack(dispatch: React.Dispatch<any>) {
		return async (name, locations) => {
			try {
				await api.post('/tracks', { name, locations })
			} catch (err) {
				console.log(err)
			}
		}
	},
}

export const { Provider, Context } = createDataContext(
	trackReducer,
	actions,
	[]
)
