import createDataContext from './createDataContext'

const locationReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'LOCATION_ADDED':
			return { ...state, currentLocation: action.payload }
		default:
			return state
	}
}

const actions = {
	clearError(dispatch: React.Dispatch<any>) {
		return () => dispatch({ type: 'ERROR', payload: '' })
	},
	startRecording(dispatch: React.Dispatch<any>) {
		return () => dispatch({ type: 'ERROR', payload: '' })
	},
	stopRecording(dispatch: React.Dispatch<any>) {
		return () => dispatch({ type: 'ERROR', payload: '' })
	},
	addLocation(dispatch: React.Dispatch<any>) {
		return (location: any) => {
			dispatch({ type: 'LOCATION_ADDED', payload: location })
		}
	},
}

export const { Provider, Context } = createDataContext(
	locationReducer,
	actions,
	{ recording: false, location: [], currentLocation: null }
)
