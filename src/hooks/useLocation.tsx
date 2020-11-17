import React from 'react'
import { Context as LocationContext } from '../context/locationContext'
export default function useLocation() {
	return React.useContext(LocationContext)
}
