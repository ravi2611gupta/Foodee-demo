import { View, FlatList } from 'react-native'
import React from 'react'
import { SIZES, dishes } from '../../constants'
import DishCard from '../../components/DishCard'

const Dishes = () => {
  return (

    <View style={{
      flex: 1,
    }}>
      <FlatList
        data={dishes}
        renderItem={({ item }) => <DishCard data={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={3}
      />
    </View>

  )
}

export default Dishes