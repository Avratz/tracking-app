import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import { NavigationContext } from '@react-navigation/native'

const NavLink: React.FC<{ text: string; location: string }> = ({
	text,
	location,
}) => {
	const navigation = React.useContext(NavigationContext)
	return (
		<TouchableOpacity onPress={() => navigation?.navigate(location)}>
			<Text style={styles.navigationText}>{text}</Text>
		</TouchableOpacity>
	)
}

export default NavLink

const styles = StyleSheet.create({
	navigationText: {
		color: 'blue',
	},
})
