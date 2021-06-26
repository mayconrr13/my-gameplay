import React, { useState } from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Header } from '../../components/Header'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { CategorySelect } from '../../components/CategorySelect'
import { GuildIcon } from '../../components/GuildIcon'
import { SmallInput } from '../../components/SmallComponent'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { ModalView } from '../../components/ModalView'
import { Guilds } from '../Guilds'
import { Background } from '../../components/Background'

interface IGuild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

export function AppointmentCreate(){
  const [category, setCategory] = useState<string>('')
  const [openGuildsModal, setOpenGuildModal] = useState<boolean>(false)
  const [guild, setGuild] = useState<IGuild>({} as IGuild)

  function handleOpenGuildsModal() {
    setOpenGuildModal(true)
  }

  function handleCloseGuildsModal() {
    setOpenGuildModal(false)
  }

  function handleGuildSelect(guildSelect: IGuild) {
    setGuild(guildSelect)
    setOpenGuildModal(false)
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId)
  }
  
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      enabled={true}
    >
      <Background>
        <ScrollView >
          <Header 
            title="Agendar partida" 
          />

          <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
            Categoria
          </Text>

          <CategorySelect 
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton
              onPress={handleOpenGuildsModal}
            >
              <View style={styles.select}>
                { guild.icon ? <GuildIcon /> : <View style={styles.image}/> }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>{guild.name ? guild.name : 'Selecione um servidor'}</Text>
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
                  Hora e minuto
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
      </Background>

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuildsModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  )
}
