import React from 'react'
import Main from './Main'
import { Provider as SessionProvider } from './src/context/sessionContext'
import { Provider as LocationProvider } from './src/context/locationContext'
import { Provider as TrackProvider } from './src/context/trackContext'
const App = () => {
	return (
		<TrackProvider>
			<LocationProvider>
				<SessionProvider>
					<Main />
				</SessionProvider>
			</LocationProvider>
		</TrackProvider>
	)
}

export default App
