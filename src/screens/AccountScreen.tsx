import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import useSession from '../hooks/useSession'

const AccountScreen = () => {
	const { state, actions } = useSession()
	return (
		<View>
			<Text>AccountScreen</Text>
			<Button title='Sign out' onPress={actions.signout}></Button>
		</View>
	)
}

export default AccountScreen

const styles = StyleSheet.create({})
