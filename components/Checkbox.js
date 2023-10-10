import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { globalStyles } from '../globalStyles/globalStyles'
import { checkboxStyle } from './styles/CheckboxStyles'
import { COLORS, FONT } from '../themes'

export const Checkbox = ({ todo }) => {
  const checkStyle = [
    checkboxStyle.checkbox,
    todo?.isCompleted ? checkboxStyle.checked : checkboxStyle.unChecked,
    globalStyles.flexCenter
  ]

  return (
    todo?.isToday
      ? <TouchableOpacity style={checkStyle}>
            {todo?.isCompleted && <Entypo name='check' size={FONT.LG} color={COLORS.SEMILIGHT}/>}
        </TouchableOpacity>
      : <View style={checkboxStyle.isToday}/>
  )
}
