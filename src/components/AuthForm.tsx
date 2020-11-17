import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Text, Button } from 'react-native-elements'
import Spacer from './Spacer'

const AuthForm: React.FC<{
	headerTitle: string
	submitButtonText: string
	error: string
	handleClick: (email: string, password: string) => void
}> = ({ headerTitle, submitButtonText, error, handleClick }) => {
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	return (
		<View>
			<Spacer>
				<Text h2>{headerTitle}</Text>
			</Spacer>
			<Spacer>
				<Input
					label='Email'
					value={email}
					onChangeText={setEmail}
					autoCapitalize='none'
					autoCorrect={false}
				/>
			</Spacer>
			<Spacer>
				<Input
					secureTextEntry
					label='Password'
					value={password}
					onChangeText={setPassword}
					autoCapitalize='none'
					autoCorrect={false}
				/>
			</Spacer>
			{error ? (
				<Spacer>
					<Text style={{ color: 'red' }}>{error}</Text>
				</Spacer>
			) : null}
			<Spacer>
				<Button
					title={submitButtonText}
					onPress={() => handleClick(email, password)}
				/>
			</Spacer>
		</View>
	)
}

export default AuthForm

const styles = StyleSheet.create({})
