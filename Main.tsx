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
import LoadingBlankScreen from './src/screens/LoadingBlankScreen'
import { AntDesign, FontAwesome, Entypo } from '@expo/vector-icons'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function TrackListStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='TrackList'
				component={TrackListScreen}
				options={{ title: 'Tracks' }}
			/>
			<Stack.Screen
				name='TrackDetails'
				component={TrackDetailScreen}
				options={{ title: 'Your Track' }}
			/>
		</Stack.Navigator>
	)
}

function AccountStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Account'
				component={AccountScreen}
				options={{ title: 'Account' }}
			/>
		</Stack.Navigator>
	)
}

function TrackCreateStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='TrackCreate'
				component={TrackCreateScreen}
				options={{ title: 'Add Track' }}
			/>
		</Stack.Navigator>
	)
}

const Main = () => {
	const { state } = useSession()
	return (
		<NavigationContainer>
			{!state.token ? (
				<Stack.Navigator>
					{state.loading ? (
						<Stack.Screen name='LoadingBlank' component={LoadingBlankScreen} />
					) : (
						<React.Fragment>
							<Stack.Screen
								name='SignIn'
								component={SigninScreen}
								options={{
									headerShown: false,
								}}
							/>
							<Stack.Screen
								name='SignUp'
								component={SignupScreen}
								options={{
									headerShown: false,
								}}
							/>
						</React.Fragment>
					)}
				</Stack.Navigator>
			) : (
				<Tab.Navigator>
					<Tab.Screen
						name='TrackList'
						component={TrackListStack}
						options={{
							title: 'Tracks',
							tabBarIcon: ({ focused, color, size }) => {
								return <Entypo name='list' size={20} color={color} />
							},
						}}
					/>
					<Tab.Screen
						name='TrackCreate'
						component={TrackCreateStack}
						options={{
							title: 'Add Track',
							tabBarIcon: ({ focused, color, size }) => {
								return <AntDesign name='pluscircle' size={18} color={color} />
							},
						}}
					/>
					<Tab.Screen
						name='Account'
						component={AccountStack}
						options={{
							title: 'Account',
							tabBarIcon: ({ focused, color, size }) => {
								return <FontAwesome name='gear' size={20} color={color} />
							},
						}}
					/>
				</Tab.Navigator>
			)}
		</NavigationContainer>
	)
}

export default Main

const styles = StyleSheet.create({})
