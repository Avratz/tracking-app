import React from 'react'
import Main from './Main'
import { Provider as SessionProvider } from './src/context/sessionContext'
import { Provider as LocationProvider } from './src/context/locationContext'
const App = () => {
	return (
		<LocationProvider>
			<SessionProvider>
				<Main />
			</SessionProvider>
		</LocationProvider>
	)
}

export default App
