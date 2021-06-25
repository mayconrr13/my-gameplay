import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { RectButton } from 'react-native-gesture-handler'
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Header } from '../../components/Header'
import { Background } from '../../components/Background'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { CategorySelect } from '../../components/CategorySelect'
import { GuildIcon } from '../../components/GuildIcon'
import { SmallInput } from '../../components/SmallComponent'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'

export function AppointmentCreate(){
  const [category, setCategory] = useState<string>('')
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }
  
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      enabled={true}
    >
      <ScrollView >
        <Header 
          title="Agendar partida" 
        />

        <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
          Categoria
        </Text>

        <CategorySelect 
          hasCheckBox
          setCategory={setCategory}
          categorySelected={category}
        />

        <View style={styles.form}>
          <RectButton>
            <View style={styles.select}>
              {
                // <View style={styles.image}/>
                <GuildIcon />
              }

              <View style={styles.selectBody}>
                <Text style={styles.label}>Selecione um servidor</Text>
              </View>

              <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={18}                  
              />
            </View>
          </RectButton>
        
          <View style={styles.field}>
            <View>
              <Text style={[styles.label, { marginBottom: 12 }]}>
                Dia e mês
              </Text>

              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>/</Text>
                <SmallInput maxLength={2} />
              </View>
            </View>

            <View>
              <Text style={[styles.label, { marginBottom: 12 }]}>
                Horário
              </Text>

              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>:</Text>
                <SmallInput maxLength={2} />
              </View>
            </View>          
          </View>

          <View style={[styles.field, { marginBottom: 12 }]}>
            <Text style={styles.label}>Descrição</Text>
            <Text style={styles.limit}>Máx 100 caractéres</Text>
          </View>

          <TextArea 
            multiline
            maxLength={100}
            numberOfLines={5}
          />

          <View style={styles.footer}>
            <Button text="Agendar" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
