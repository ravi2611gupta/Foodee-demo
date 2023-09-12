import { View, SafeAreaView, Text } from 'react-native'
import React from 'react'
import { FocusedStatusBar } from '../components'
import { COLORS } from '../constants'

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
    <FocusedStatusBar background={COLORS.primary} />
    <View style={{flex: 1}}>
      <Text>
        hey this is ravi
      </Text>
    </View>
</SafeAreaView>
  )
}

export default Home