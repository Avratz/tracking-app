import { NavigationContext, useIsFocused } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import {
	FlatList,
	ScrollView,
	TouchableOpacity,
} from 'react-native-gesture-handler'
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
		<View style={{ flex: 1 }}>
			<ScrollView>
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
			</ScrollView>
		</View>
	)
}

export default TrackListScreen

const styles = StyleSheet.create({})
