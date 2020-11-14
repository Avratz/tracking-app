import React from 'react'
import Main from './Main'
import { Provider as SessionProvider } from './src/context/sessionContext'
const App = () => {
	return (
		<SessionProvider>
			<Main />
		</SessionProvider>
	)
}

export default App
