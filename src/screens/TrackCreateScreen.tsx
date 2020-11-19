import '../_mockLocation'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Map from '../components/Map'
import { useIsFocused } from '@react-navigation/native'

import useLocation from '../hooks/useLocation'
import useLocationContext from '../hooks/useLocationContext'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = () => {
	const isFocused = useIsFocused()
	const { state, actions } = useLocationContext()
	const callback = React.useCallback(
		(location: any) => actions.addLocation(location, state.recording),
		[state.recording]
	)
	const [err] = useLocation(isFocused, callback)

	return (
		<View>
			<Map />
			{err ? 'Please enable location services.' : null}
			<TrackForm />
		</View>
	)
}

export default TrackCreateScreen

const styles = StyleSheet.create({})
