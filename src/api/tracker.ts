import Axios, { AxiosRequestConfig } from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const instance = Axios.create({
	baseURL: 'http://e0a4361f3e9a.ngrok.io',
})

instance.interceptors.request.use(
	async (config: AxiosRequestConfig) => {
		const token = await AsyncStorage.getItem('token')
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	(err) => Promise.reject(err)
)
export default instance
