import React from 'react'

import { Button, Input } from 'react-native-elements'
import useLocationContext from '../hooks/useLocationContext'
import Spacer from './Spacer'
import useSaveTrack from '../hooks/useSaveTrack'
const TrackForm = () => {
	const {
		state: { name, recording, locations },
		actions,
	} = useLocationContext()
	const [saveTrack] = useSaveTrack()
	return (
		<React.Fragment>
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
		</React.Fragment>
	)
}

export default TrackForm
