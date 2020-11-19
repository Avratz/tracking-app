import React from 'react'

import { Button, Input } from 'react-native-elements'
import useLocationContext from '../hooks/useLocationContext'
import Spacer from './Spacer'

const TrackForm = () => {
	const {
		state: { name, recording },
		actions,
	} = useLocationContext()
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
		</React.Fragment>
	)
}

export default TrackForm
