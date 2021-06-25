import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Text, View, ImageBackground } from 'react-native'
import { Fontisto } from '@expo/vector-icons'

import { Header } from '../../components/Header'
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'

import BannerImg from '../../assets/banner.png'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { FlatList } from 'react-native'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'

export function AppointmentDetails(){
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  const members = [
    {
      id: '1',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/mayconrr13.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/mayconrr13.png',
      status: 'online'
    },
    {
      id: '3',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/mayconrr13.png',
      status: 'online'
    },
  ]

  return (
    <Background>
      <Header 
        title="Detalhes" 
        action={
          <BorderlessButton onPress={handleGoBack}>
            <Fontisto 
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground 
        source={BannerImg} 
        style={styles.banner} 
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title} >Lendários</Text>
          <Text style={styles.subtitle} >É hoje que vamos chegar ao challenger sem perder uma partida da md10</Text>
        </View>  
      </ImageBackground> 

      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      />
      <FlatList
        style={styles.membersList}
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
      />    

      <View
        style={styles.footer}
      >
        <ButtonIcon 
          text="Entrar na partida"
        />
      </View>
    </Background>
  )
}
