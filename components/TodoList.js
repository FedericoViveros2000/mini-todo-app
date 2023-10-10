import React from 'react'
import { FlatList, Text } from 'react-native'
import { TodoItem } from './TodoItem'

export const TodoList = ({ data }) => {
  return (
    <>
      <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TodoItem todo={item} key={item.id}/>}
      />
    </>
  )
}
