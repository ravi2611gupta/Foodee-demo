import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import ProfileNavigator from '../navigators/ProfileNavigator'
import { COLORS, FONTS, SIZES, assets } from '../constants'
import Button, { ButtonType } from '../components/shared/Button'

const Profile = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: SIZES.medium,
      }}
    >
      <View
        style={{
          paddingHorizontal: SIZES.medium,
        }}
      >
        {/* profile pic and following details */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: SIZES.medium,
          }}
        >
          <Image
            source={assets.person04}
            resizeMode='contain'
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <View
              style={{
                alignItems: 'center'
              }}
            >
              <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.secondary }}>Reviews</Text>
              <Text style={{ fontSize: SIZES.medium }}>76</Text>
            </View>
            <View
              style={{
                alignItems: 'center'
              }}
            >
              <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.secondary }}>Followers</Text>
              <Text style={{ fontSize: SIZES.medium }}>20K</Text>
            </View>
            <View
              style={{
                alignItems: 'center'
              }}
            >
              <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.secondary }}>Following</Text>
              <Text style={{ fontSize: SIZES.medium }}>2767</Text>
            </View>
          </View>
        </View>

        {/* user details */}
        <View>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.large }}>ILoveFood07</Text>
          <Text style={{ fontSize: SIZES.font, color: COLORS.primary, marginTop: 5 }}>Soho, London</Text>
          <Text style={{ fontSize: SIZES.font, color: COLORS.secondary, marginTop: 5 }}>Passionate foodie on a global culinary journey, exploring flavors and cultures.</Text>
        </View>

        {/* likes and dislikes */}
        <View>
          <View style={{
            flexDirection: 'row',
            marginTop: 5,
          }}>
            <View
              style={{
                width: 80,
              }}
            >
              <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.font }}>Likes</Text>
            </View>
            <Text style={{ fontSize: SIZES.font, color: COLORS.secondary }}>Pad Thai | Pasta</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            marginTop: 5,
          }}>
            <View
              style={{
                width: 80,
              }}
            >
              <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.font }}>Dislikes</Text>
            </View>
            <Text style={{ fontSize: SIZES.font, color: COLORS.secondary }}>Cheese | Fish</Text>
          </View>
        </View>

        {/* buttons */}
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            width: '100%',
            marginTop: SIZES.large,
            marginBottom: SIZES.medium,
          }}
        >
          <View style={{
            flex: 1,
          }}>
            <Button label='Edit Profile' />
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <Button type={ButtonType.GHOST} label='Share Profile' />
          </View>
        </View>
      </View>
      <ProfileNavigator />
    </SafeAreaView>
  )
}

export default Profile