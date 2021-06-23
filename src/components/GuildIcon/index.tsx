import React from 'react'
import { Image } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export function GuildIcon() {
  const uri = "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/141039545/original/d25cce09d8ae01d38498939f7e82839929c27e12/create-a-discord-icon-logo.png"

  return (
    <Image 
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  )
}