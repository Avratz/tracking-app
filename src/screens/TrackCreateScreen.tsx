import '../_mockLocation'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Map from '../components/Map'
import { useIsFocused } from '@react-navigation/native'

import useLocation from '../hooks/useLocation'
import useLocationContext from '../hooks/useLocationContext'

const TrackCreateScreen = () => {
	const isFocused = useIsFocused()
	const { actions } = useLocationContext()
	const [err] = useLocation(isFocused, (location: any) =>
		actions.addLocation(location)
	)

	return (
		<View>
			<Map />
			{err ? 'Please enable location services.' : null}
		</View>
	)
}

export default TrackCreateScreen

const styles = StyleSheet.create({})
