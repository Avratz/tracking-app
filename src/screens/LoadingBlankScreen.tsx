import React from 'react'
import useSession from '../hooks/useSession'

const LoadingBlankScreen = () => {
	const { state, actions } = useSession()
	React.useEffect(() => {
		actions.autoLogin()
	}, [])
	return null
}

export default LoadingBlankScreen
