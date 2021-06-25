import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { Background } from '../../components/Background'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'

import { styles } from './styles'

export function Home(){
  const [category, setCategory] = useState<string>('')

  const navigation = useNavigation()

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails')
  }

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Lendários',
        icon: null,
        owner: false,
      },
      category: '3',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <Background>
      <View style={styles.container} >
        <View style={styles.header}>
          <Profile />

          <ButtonAdd />
        </View>    

        <CategorySelect 
          categorySelected={category} 
          setCategory={handleCategorySelect}
        /> 

        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="6" />

          <FlatList 
            data={appointments} 
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment 
                data={item} 
                onPress={handleAppointmentDetails}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Background>
  )
}
