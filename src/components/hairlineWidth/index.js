import { StyleSheet, View } from 'react-native'
import React from 'react'

export default function HairLine({marginTop = 0,marginBottom = 0}) {
  return (
    <View
        style={{ 
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginTop:marginTop,
          marginBottom:marginBottom,
         }}
    />
  )
}