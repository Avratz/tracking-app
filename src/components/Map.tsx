import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'

import useLocationContext from '../hooks/useLocationContext'
const Map = () => {
	const {
		state: { currentLocation, locations },
	} = useLocationContext()

	if (!currentLocation) return null
	return (
		<MapView
			style={styles.map}
			initialRegion={{
				...currentLocation.coords,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}
		>
			<Circle
				center={currentLocation.coords}
				radius={25}
				strokeColor='rgba(158,158,255,1)'
				fillColor='rgba(158,158,255,0.3)'
			/>
			<Polyline coordinates={locations.map((loc) => loc.coords)} />
		</MapView>
	)
}

export default Map

const styles = StyleSheet.create({
	map: {
		height: 300,
		marginBottom: 15,
	},
})
