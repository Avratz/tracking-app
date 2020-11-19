import React from 'react'

import {
	requestPermissionsAsync,
	watchPositionAsync,
	Accuracy,
} from 'expo-location'

export default function useLocation(shouldTrack: boolean, callback: any) {
	const [err, setErr] = React.useState('')
	React.useEffect(() => {
		let subscriber
		const startWatching = async () => {
			try {
				await requestPermissionsAsync()
				subscriber = await watchPositionAsync(
					{
						accuracy: Accuracy.BestForNavigation,
						timeInterval: 1000,
						distanceInterval: 10,
					},
					callback
				)
			} catch (err) {
				setErr(err)
				console.log(err)
			}
		}

		if (shouldTrack) {
			startWatching()
		} else {
			if (subscriber) {
				subscriber.remove()
			}

			subscriber = null
		}
		return () => {
			if (subscriber) {
				subscriber.remove()
			}
		}
	}, [shouldTrack, callback])
	return [err]
}
