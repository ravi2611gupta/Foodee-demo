import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants';
import Star from './shared/Star';

const { width } = Dimensions.get('window');

const DishCard = ({data}) => {
    return (
        <View
            style={{
                width: width / 3,
                height: width / 3,
                alignItems: 'center',
                position: 'relative'
            }}
        >
            <Image
                source={data.image}
                resizeMode='contain'
                style={{
                    width: width / 3 - 5,
                    height: width / 3 - 5,
                }}
            />

            <View
                style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: 12,
                    right: 9,
                    height: 30,
                    width: 56,
                    backgroundColor: COLORS.white,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 3,
                }}
            >
                <Star />
                <Text style={{ fontSize: SIZES.font, fontFamily: FONTS.InterSemiBold }}>4.6</Text>
            </View>
        </View>
    )
}

export default DishCard