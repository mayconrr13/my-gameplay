import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Text, View, ImageBackground } from 'react-native'
import { Fontisto } from '@expo/vector-icons'

import { Header } from '../../components/Header'
import { Background } from '../../components/Background'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export function AppointmentDetails(){
  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate('Home')
  }

  return (
    <Background>
      <Header 
        title="Detalhes" 
        action={
          <BorderlessButton>
            <Fontisto 
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <View style={styles.container} >
        <Text>Olá</Text>
      </View>      
    </Background>
  )
}
