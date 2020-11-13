import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button} from 'react-native-elements'
import Spacer from '../components/Spacer'

const SigninScreen = () => {
  return (
    <View>
      <Spacer>
        <Text h2>Sign in!</Text>
      </Spacer>
      <Spacer>
        <Input label="Email"/>
      </Spacer>
      <Spacer>
        <Input label="Password"/>
      </Spacer>
      <Spacer>
        <Button title="SignIn!"/>
      </Spacer>

    </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
  input: {
    marginTop: 35,
  }
})
