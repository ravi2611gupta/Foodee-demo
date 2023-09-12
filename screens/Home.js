import { View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { FocusedStatusBar, HomeHeader } from '../components'
import { COLORS, dishData } from '../constants'
import FeedCard from '../components/FeedCard'

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary} />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={dishData}
                    renderItem={({ item }) => <FeedCard data={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<HomeHeader />}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home