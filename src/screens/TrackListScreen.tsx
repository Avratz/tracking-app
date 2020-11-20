import { NavigationContext, useIsFocused } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import useTrack from '../hooks/useTrack'

const TrackListScreen = () => {
	const navigation = React.useContext(NavigationContext)
	const isFocused = useIsFocused()
	const { state, actions }: { state: any[]; actions: any } = useTrack()

	React.useEffect(() => {
		if (isFocused) {
			actions.getTracks()
		}
	}, [isFocused])

	console.log(state)
	return (
		<React.Fragment>
			<FlatList
				data={state}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation?.navigate('TrackDetails', { _id: item._id })
							}
						>
							<ListItem bottomDivider>
								<ListItem.Content>
									<ListItem.Title>{item.name}</ListItem.Title>
								</ListItem.Content>
								<ListItem.Chevron />
							</ListItem>
						</TouchableOpacity>
					)
				}}
			/>
		</React.Fragment>
	)
}

export default TrackListScreen

const styles = StyleSheet.create({})
