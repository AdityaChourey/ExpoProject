import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Day1 = () => {
  return (
    <View>
      <Stack.Screen options={{title:'Day 1'}}/>
      <Text>Day1</Text>
    </View>
  )
}

export default Day1