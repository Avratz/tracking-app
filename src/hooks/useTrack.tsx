import React from 'react'
import { Context as TrackContext } from '../context/trackContext'
export default function useTrack() {
	return React.useContext(TrackContext)
}
