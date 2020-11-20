import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useTrack from '../hooks/useTrack'
import MapView, { Polyline } from 'react-native-maps'

const TrackDetailScreen = ({ route }) => {
	const { state } = useTrack()
	const track = state.find((track) => track?._id === route.params._id)

	const initialCoords = track.locations[0].coords
	return (
		<View>
			<MapView
				style={styles.map}
				initialRegion={{
					...initialCoords,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01,
				}}
			>
				<Polyline
					coordinates={track.locations.map((location) => location.coords)}
				/>
			</MapView>
			<Text>{track.name}</Text>
		</View>
	)
}

export default TrackDetailScreen

const styles = StyleSheet.create({
	map: {
		height: 300,
		marginBottom: 15,
	},
})
