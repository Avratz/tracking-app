import React from 'react'
import { StyleSheet, View } from 'react-native'
import Map from '../components/Map'
import {
	requestPermissionsAsync,
	watchPositionAsync,
	Accuracy,
} from 'expo-location'

import '../_mockLocation'
import useLocation from '../hooks/useLocation'

const TrackCreateScreen = () => {
	const [err, setErr] = React.useState('')
	const { state, actions } = useLocation()
	const startWatching = async () => {
		try {
			await requestPermissionsAsync()
			await watchPositionAsync(
				{
					accuracy: Accuracy.BestForNavigation,
					timeInterval: 1000,
					distanceInterval: 10,
				},
				(location) => {
					actions.addLocation(location)
				}
			)
		} catch (err) {
			setErr(err)
			console.log(err)
		}
	}

	React.useEffect(() => {
		startWatching()
	}, [])

	return (
		<View>
			<Map />
			{err ? 'Please enable location services.' : null}
		</View>
	)
}

export default TrackCreateScreen

const styles = StyleSheet.create({})
