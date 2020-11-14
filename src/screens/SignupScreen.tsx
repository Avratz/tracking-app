import React from 'react'
import { useIsFocused } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import Spacer from '../components/Spacer'
import useSession from '../hooks/useSession'

const SignupScreen = () => {
	const { state, actions } = useSession()
	const isFocused = useIsFocused()
	React.useLayoutEffect(() => {
		actions.clearError()
	}, [isFocused])
	return (
		<View style={styles.container}>
			<AuthForm
				headerTitle='Crea tu cuenta!'
				submitButtonText='Crear cuenta'
				error={state.error}
				handleClick={actions.signup}
			/>
			<Spacer>
				<NavLink text='¿Tenes cuenta? !Inicia sesion!' location='SignIn' />
			</Spacer>
		</View>
	)
}

export default SignupScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingBottom: 50,
	},
	navigationText: {
		color: 'blue',
	},
})
