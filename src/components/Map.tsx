import React from 'react'
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import useLocation from '../hooks/useLocation'
const Map = () => {
	const {
		state: { currentLocation },
	} = useLocation()

	if (!currentLocation) return null
	return (
		<MapView
			style={styles.map}
			initialRegion={{
				...currentLocation.coords,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}
			region={{
				...currentLocation.coords,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}
		></MapView>
	)
}

export default Map

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
})
