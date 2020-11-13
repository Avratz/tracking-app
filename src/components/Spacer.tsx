import React from 'react'
import { StyleSheet, View } from 'react-native'

const Spacer:React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <View style={styles.space}>
      {children}
    </View>
  )
}

export default Spacer

const styles = StyleSheet.create({
  space:{
    marginBottom: 15,
    paddingHorizontal: 15
  }
})
