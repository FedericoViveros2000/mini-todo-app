import React from 'react'
import { View, Text } from 'react-native'
import { TodoStyles } from './styles/TodoStyles'
import { Checkbox } from './Checkbox'

export const TodoItem = ({ todo }) => {
  const TodoCompleted = [
    TodoStyles.text,
    todo?.isCompleted && TodoStyles.textCompleted
  ]
  return (
    <View style={TodoStyles.container}>
      <Checkbox todo={todo}/>
      <View>
        <Text style={TodoCompleted}>{todo?.text}</Text>
        <Text style={TodoCompleted}>{todo?.hour}</Text>
      </View>
    </View>
  )
}
