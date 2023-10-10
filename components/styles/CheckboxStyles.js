import { StyleSheet } from 'react-native'
import { COLORS } from '../../themes/index'
export const checkboxStyle = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 13,
    borderWidth: 2,
    borderRadius: 6,
    marginLeft: 15,
    shadowColor: COLORS.BLACK,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 5
  },
  checked: {
    borderColor: COLORS.BLACK,
    backgroundColor: COLORS.BLACK,
    shadowOpacity: 0.3
  },
  unChecked: {
    borderColor: COLORS.UNCHECKED,
    backgroundColor: COLORS.LIGHT,
    shadowOpacity: 0.1
  },
  isToday: {
    width: 10,
    height: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: COLORS.SEMIBLACK,
    marginRight: 13,
    marginLeft: 15
  }
})
