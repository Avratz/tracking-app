import React from 'react'
import { Context as SessionContext } from '../context/sessionContext'
export default function useSession() {
	return React.useContext(SessionContext)
}
