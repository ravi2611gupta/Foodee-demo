import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome';
import Star from './shared/Star';

const FeedCard = ({ data }) => {
    const { width } = Dimensions.get('window');

    return (
        <View style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.font,
        }}>
            {/* user details */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        gap: 10,
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={data.userProfileImage}
                        resizeMode='contain'
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                        }}
                    />
                    <View>
                        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.large }}>{data.userName}</Text>
                        <Text style={{ fontSize: SIZES.small, color: COLORS.secondary }}>{data.userLocation}</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: SIZES.large, color: COLORS.primary }}>2.1 miles</Text>
                </View>
            </View>
            {/* feed image */}
            <View
                style={{
                    marginVertical: SIZES.font,
                    position: 'relative',
                }}
            >
                <Image
                    source={data.dishImage}
                    resizeMode='contain'
                    style={{
                        width: width - SIZES.extraLarge + 10,
                        height: width - SIZES.extraLarge + 10,
                        borderRadius: SIZES.small
                    }}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        gap: 10,
                        position: 'absolute',
                        bottom: 10,
                        left: 10,
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source={data.restaurantProfileImage}
                        resizeMode='contain'
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            borderWidth: 2.5,
                            borderColor: COLORS.white,
                        }}
                    />
                    <View>
                        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.large, color: COLORS.white }}>{data.restaurantName}</Text>
                    </View>
                </View>
            </View>
            {/* dish name */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.large }}>{data.dishName}</Text>
                <Icon name="bookmark-o" size={30} color={COLORS.primary} />
            </View>
            {/* price */}
            <Text style={{ fontFamily: FONTS.InterSemiBold, fontSize: SIZES.large }}>{data.dishPrise}</Text>
            {/* rating */}
            <View
                style={{
                    flexDirection: 'row',
                    gap: 5,
                    alignItems: 'center',
                    marginTop: 5,
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    gap: 2,
                }}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star on={false} />
                </View>
                <Text style={{ fontFamily: FONTS.InterSemiBold, fontSize: SIZES.font }}>{data.dishRating}</Text>
                <Text style={{ fontSize: SIZES.font, color: COLORS.secondary }}>({data.reviewCount} Reviews)</Text>
            </View>
            {/* description */}
            <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.secondary, marginTop: 5, }}>{data.dishDescription}</Text>
            {/* tags */}
            <View
                style={{
                    flexDirection: 'row',
                    gap: 5,
                    marginTop: SIZES.small,
                }}
            >
                {data.tags.map((tag) => <View
                    key={tag}
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        borderRadius: 10,
                        backgroundColor: '#222'
                    }}
                >
                    <Text style={{ color: COLORS.white }}>{tag}</Text>
                </View>)}
            </View>
            {/* time */}
            <Text style={{ color: COLORS.secondary, fontSize: SIZES.small, marginTop: SIZES.small }}>2 hours ago</Text>

        </View>
    )
}

export default FeedCard