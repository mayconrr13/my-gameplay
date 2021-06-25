import React from 'react'
import { Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './styles'

interface ButtonProps extends RectButtonProps {
  text: string;
}

export function Button({text, ...rest}: ButtonProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.text}>{text}</Text>
    </RectButton>
  )
}