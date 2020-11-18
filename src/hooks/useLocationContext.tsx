import React from 'react'
import { Context as LocationContext } from '../context/locationContext'

export default function useLocationContext() {
	return React.useContext(LocationContext)
}
