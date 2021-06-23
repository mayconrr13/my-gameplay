import React, { ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

interface IBackgroundProps {
  children: ReactNode;
}

export function Bakcground({ children }: IBackgroundProps) {
  const { secondary80, secondary100 } = theme.colors
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  )
}