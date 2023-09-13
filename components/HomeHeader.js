import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, assets } from '../constants'
import Icon from 'react-native-vector-icons/Octicons';


const HomeHeader = () => {
  return (
    <View style={{
      padding: SIZES.font,
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <View>
          <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.large }}>Explore</Text>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.extraLarge }}>
            foodee
          </Text>
          <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.primary }}>
            <Icon name="location" size={15} color={COLORS.primary} /> Soho, London
          </Text>
        </View>
        <View style={{ width: 45, height: 45, alignItems: 'flex-end' }}>
          <Icon name="bell" size={35} color={COLORS.secondary} />
          <View
            style={{
              height: 8, 
              width: 8,
              borderRadius: 4,
              backgroundColor: COLORS.primary,
              position: 'absolute',
              top: 1,
              right: 4
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader