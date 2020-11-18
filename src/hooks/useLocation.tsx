import React from 'react'

import {
	requestPermissionsAsync,
	watchPositionAsync,
	Accuracy,
} from 'expo-location'

export default function useLocation(shouldTrack: boolean, callback: any) {
	const [err, setErr] = React.useState('')
	const [subscriber, setSubscriber] = React.useState(null)
	const startWatching = async () => {
		try {
			await requestPermissionsAsync()
			const sub = await watchPositionAsync(
				{
					accuracy: Accuracy.BestForNavigation,
					timeInterval: 1000,
					distanceInterval: 10,
				},
				(location) => {
					callback(location)
				}
			)
			setSubscriber(sub)
		} catch (err) {
			setErr(err)
			console.log(err)
		}
	}

	React.useEffect(() => {
		console.log(shouldTrack)
		if (shouldTrack) {
			startWatching()
		} else {
			subscriber.remove()
			setSubscriber(null)
		}
	}, [shouldTrack])
	return [err]
}
