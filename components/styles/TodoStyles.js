import { StyleSheet } from 'react-native'
import { COLORS, FONT, FONTWEIGHT } from '../../themes/index'

export const TodoStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  text: {
    fontSize: FONT.MD,
    fontWeight: FONTWEIGHT.MD,
    color: COLORS.GREY
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: COLORS.GREYOPACITY
  },
  time: {
    fontSize: FONT.MD,
    color: COLORS.SEMIGREY,
    fontWeight: FONTWEIGHT.MD
  }
})
