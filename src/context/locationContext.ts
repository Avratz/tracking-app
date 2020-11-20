import createDataContext from './createDataContext'

const initialState = {
	recording: false,
	locations: [],
	currentLocation: null,
	name: '',
}
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
		case 'RESET':
			return { ...state, name: '', locations: [] }
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
	reset(dispatch: React.Dispatch<any>) {
		return () => dispatch({ type: 'RESET' })
	},
}

export const { Provider, Context } = createDataContext(
	locationReducer,
	actions,
	initialState
)
