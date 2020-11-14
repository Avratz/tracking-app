import { useIsFocused } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import Spacer from '../components/Spacer'
import useSession from '../hooks/useSession'

const SigninScreen = () => {
	const { state, actions } = useSession()
	const isFocused = useIsFocused()
	React.useLayoutEffect(() => {
		actions.clearError()
	}, [isFocused])

	return (
		<View style={styles.container}>
			<AuthForm
				headerTitle='Ingresa con tu cuenta.'
				submitButtonText='Iniciar sesion'
				error={state.error}
				handleClick={actions.signin}
			/>
			<Spacer>
				<NavLink text='¿No tenes cuenta? !Creala ahora!' location='SignUp' />
			</Spacer>
		</View>
	)
}

export default SigninScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingBottom: 50,
	},
})
