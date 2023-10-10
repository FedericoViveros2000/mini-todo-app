import React, { useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import { TodoList } from '../components/TodoList'
import { COLORS, FONT, FONTWEIGHT } from '../themes/index'
import { todosData } from '../data/index'
import { TodoTitle } from '../components/TodoTitle'
import { globalStyles } from '../globalStyles/globalStyles'

const catImage = 'https://t3.ftcdn.net/jpg/05/77/51/48/360_F_577514801_dQYirVqOAgFDFZMyI9Ea7tinfQOITO1R.jpg'

export default function Home () {
  const [localData] = useState(todosData?.sort((a, b) => a?.isCompleted - b?.isCompleted))
  return (
    <View style={HomeStyle.container}>
      <Image
        source={{ uri: catImage }}
        style={HomeStyle.picture}
      />
      <View style={[globalStyles.flexRow, globalStyles.itemsBaseline, globalStyles.spaceBetween]}>
        <TodoTitle title="Today"/>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={{ color: COLORS.LIGHTBLUE }}>Hide Completed</Text>
        </TouchableOpacity>
      </View>
      <TodoList data={localData?.filter(todo => todo?.isToday)}/>
      <TodoTitle title="Tomorrow"/>
      <TodoList data={localData?.filter(todo => !todo?.isToday)}/>
    </View>
  )
}

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1
  },
  picture: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignSelf: 'flex-end'
  }

})
