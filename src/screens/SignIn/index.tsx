import React from 'react'
import { Image, Text, View, Alert, ActivityIndicator } from 'react-native'

import IllustrationImg from '../../assets/illustration.png'
import { Background } from '../../components/Background'
import { ButtonIcon } from '../../components/ButtonIcon'
import { theme } from '../../global/styles/theme'
import { useAuth } from '../../hooks/useAuth'

import { styles } from './styles'

export function SignIn(){
  const { signIn, loading } = useAuth()

  async function handleSignIn() {
    try {
      await signIn()
    } catch (error) {
      Alert.alert(error)
    }
  }

  return (
    <Background>
      <View style={styles.container} >
        <Image source={IllustrationImg} style={styles.image} resizeMode="stretch"/>

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`}
            e organize suas {`\n`}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>

          {
            loading ? (
              <ActivityIndicator color={theme.colors.primary} />
            ) : (
              <ButtonIcon 
                text="Entrar com Discord" 
                onPress={handleSignIn}
              />
            )
          }
        </View>
      </View>      
    </Background>
  )
}
