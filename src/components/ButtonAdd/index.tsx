import React from 'react'
import { Image, Text, View, } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { useNavigation } from '@react-navigation/native'


export function ButtonAdd({...rest}: RectButtonProps) {
  const navigation = useNavigation()

  function handleAddNewAppointment() {
    navigation.navigate('AppointmentDetails')
  }
  
  return (
    <RectButton 
      style={styles.container} 
      {...rest}
    >
      <MaterialCommunityIcons 
        name="plus"
        color={theme.colors.heading}
        size={24}
        onPress={handleAddNewAppointment}
      />
    </RectButton>
  )
}