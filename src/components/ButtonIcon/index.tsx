import React from 'react'
import { Image, Text, View, } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'

interface ButtonIconProps extends RectButtonProps {
  text: string;
}

export function ButtonIcon({text, ...rest}: ButtonIconProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}/>
      </View>

      <Text style={styles.text}>{text}</Text>
    </RectButton>
  )
}