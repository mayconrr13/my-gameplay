import React from 'react'
import { View, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { categories } from '../../utils/categories'
import { GuildIcon } from '../GuildIcon'

import { styles } from './styles'

import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import { theme } from '../../global/styles/theme'

interface GuildProps {
  id: string;
  name: string;
  icon: React.FC | null;
  owner: true;
}

export interface IAppointment {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

interface IAppointmentProps extends RectButtonProps {
  data: IAppointment;
}

export function Appointment({ data, ...rest }: IAppointmentProps) {
  const [category] = categories.filter(item => item.id === data.category)
  const { owner } = data.guild
  const { primary, on } = theme.colors

  return (    
    <RectButton {...rest} >
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {data.guild.name}
            </Text>

            <Text style={styles.category}>
              {category.title}
            </Text>
          </View >

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />

              <Text style={styles.date}>
                { data.date }
              </Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={ owner ? primary : on } />

              <Text style={[styles.player, { color: owner ? primary : on }]} >
                { owner ? 'Anfitrião' : 'Convidado' }
              </Text>
            </View>
          </View>

        </View>
      </View>
    </RectButton>
  )
}