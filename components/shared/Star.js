import { View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import AntDesign from 'react-native-vector-icons/AntDesign';

const Star = ({
  on = true
}) => {
  return (
    <View
        style={{
            height: 23,
            width: 23,
            backgroundColor: on ? COLORS.primary : COLORS.secondary,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
        }}
    >
     <AntDesign name='star' size={15} color={COLORS.white} /> 
    </View>
  )
}

export default Star