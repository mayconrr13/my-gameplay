import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

interface IListDivider {
  isCentered?: boolean;
}

export function ListDivider({ isCentered = false }: IListDivider) {
  return (    
    <View style={[
      styles.container,
      isCentered ? { marginVertical: 12 } : { marginTop: 2, marginBottom: 31 }
    ]} />
  )
}