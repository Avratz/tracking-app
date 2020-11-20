import React from 'react'
import { NavigationContext } from '@react-navigation/native'
import useLocationContext from './useLocationContext'
import useTrack from './useTrack'

export default () => {
	const navigation = React.useContext(NavigationContext)
	const {
		actions: { createTrack },
	} = useTrack()
	const {
		state: { locations, name },
		actions: { reset },
	} = useLocationContext()

	const saveTrack = async () => {
		await createTrack(name, locations)
		reset()
		navigation?.navigate('TrackList')
	}
	return [saveTrack]
}
