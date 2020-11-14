import React from 'react'
import { StyleSheet } from 'react-native'

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'

import useSession from './src/hooks/useSession'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function TrackListStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name='TrackList' component={TrackListScreen} />
			<Stack.Screen name='TrackDetails' component={TrackDetailScreen} />
		</Stack.Navigator>
	)
}

const Main = () => {
	const { state } = useSession()
	return (
		<NavigationContainer>
			{!state.token ? (
				<Stack.Navigator>
					<Stack.Screen
						name='SignUp'
						component={SignupScreen}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name='SignIn'
						component={SigninScreen}
						options={{
							headerShown: false,
						}}
					/>
				</Stack.Navigator>
			) : (
				<Tab.Navigator>
					<Tab.Screen name='TrackList' component={TrackListStack} />
					<Tab.Screen name='Account' component={AccountScreen} />
					<Tab.Screen name='TrackCreate' component={TrackCreateScreen} />
				</Tab.Navigator>
			)}
		</NavigationContainer>
	)
}

export default Main

const styles = StyleSheet.create({})
