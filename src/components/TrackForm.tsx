import React from 'react'

import { Button, Input } from 'react-native-elements'
import useLocationContext from '../hooks/useLocationContext'
import Spacer from './Spacer'
import useSaveTrack from '../hooks/useSaveTrack'
import { ScrollView } from 'react-native-gesture-handler'
const TrackForm = () => {
	const {
		state: { name, recording, locations },
		actions,
	} = useLocationContext()
	const [saveTrack] = useSaveTrack()
	return (
		<ScrollView>
			<Spacer>
				<Input
					value={name}
					placeholder='Enter name'
					onChangeText={actions.changeName}
				/>
			</Spacer>
			<Spacer>
				<Button
					title={!recording ? 'Start Recording' : 'Stop'}
					onPress={!recording ? actions.startRecording : actions.stopRecording}
				/>
			</Spacer>
			<Spacer>
				{!recording && locations.length ? (
					<Button title='Save' onPress={saveTrack} />
				) : null}
			</Spacer>
		</ScrollView>
	)
}

export default TrackForm
