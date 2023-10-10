import React from 'react'
import { SafeAreaView, Platform, StyleSheet } from 'react-native'
import Home from './screens/Home'
import { PLATFORM } from './utils/constans/platform'

export default function App () {
  return (
    <SafeAreaView style={AppStyle.container}>
      <Home/>
    </SafeAreaView>
  )
}

const AppStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS !== PLATFORM.IOS ? 70 : 0,
    paddingHorizontal: 15
  }
})
