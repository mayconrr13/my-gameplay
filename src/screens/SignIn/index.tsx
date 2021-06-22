import React, { useState } from 'react'
import { Image, Text, View, StatusBar } from 'react-native'

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'

import { styles } from './styles'

export function SignIn(){
  const [counter, setCounter] = useState(0)

  return (
    <View style={styles.container} >
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image source={IllustrationImg} style={styles.image} resizeMode="stretch"/>

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon text="Entrar com Discord" activeOpacity={0.7}/>
      </View>
    </View>
  )
}
