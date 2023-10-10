import { Text } from 'react-native'
import { styleTitle } from './styles/TodoTitle'
export const TodoTitle = ({ title }) => {
  return (
    <Text style={styleTitle.title}>{title}</Text>
  )
}
