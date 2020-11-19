import createDataContext from './createDataContext'

const locationReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'START':
			return { ...state, recording: true }
		case 'STOP':
			return { ...state, recording: false }
		case 'LOCATION_ADDED':
			return { ...state, currentLocation: action.payload }
		case 'ADD_LOCATION':
			return { ...state, locations: [...state.locations, action.payload] }
		case 'CHANGE_NAME':
			return { ...state, name: action.payload }
		default:
			return state
	}
}

const actions = {
	changeName(dispatch: React.Dispatch<any>) {
		return (name) => dispatch({ type: 'CHANGE_NAME', payload: name })
	},
	clearError(dispatch: React.Dispatch<any>) {
		return () => dispatch({ type: 'ERROR', payload: '' })
	},
	startRecording(dispatch: React.Dispatch<any>) {
		return () => dispatch({ type: 'START' })
	},
	stopRecording(dispatch: React.Dispatch<any>) {
		return () => dispatch({ type: 'STOP' })
	},
	addLocation(dispatch: React.Dispatch<any>) {
		return (location: any, recording: boolean) => {
			dispatch({ type: 'LOCATION_ADDED', payload: location })
			if (recording) {
				dispatch({ type: 'ADD_LOCATION', payload: location })
			}
		}
	},
}

export const { Provider, Context } = createDataContext(
	locationReducer,
	actions,
	{ recording: false, locations: [], currentLocation: null, name: '' }
)
