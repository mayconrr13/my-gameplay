import { StyleSheet } from 'react-native'
import { themes } from '../../global/styles/themes'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: themes.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: themes.colors.line,
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  text: {
    flex: 1,
    color: themes.colors.heading,
    textAlign: 'center',
  },
})