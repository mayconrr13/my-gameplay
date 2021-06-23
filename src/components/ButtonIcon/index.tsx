import React from 'react'
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View, } from 'react-native'

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'

interface ButtonIconProps extends TouchableOpacityProps {
  text: string;
}

export function ButtonIcon({text, ...rest}: ButtonIconProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}/>
      </View>

      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}