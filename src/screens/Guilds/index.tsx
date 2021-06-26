import React from 'react'
import { View, FlatList } from 'react-native'
import { Guild } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'

import { styles } from './styles'

interface IGuild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

interface IGuilds {
  handleGuildSelect: (guild: IGuild) => void;
}

export function Guilds({ handleGuildSelect }: IGuilds) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    {
      id: '2',
      name: 'DNCEG',
      icon: null,
      owner: false,
    },
    {
      id: '3',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    {
      id: '4',
      name: 'DNCEG',
      icon: null,
      owner: false,
    },
    {
      id: '15',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    {
      id: '6',
      name: 'DNCEG',
      icon: null,
      owner: false,
    },
  ]
  return (
    <View style={styles.container}>
      <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild 
            data={ item } 
            onPress={() => handleGuildSelect(item)}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ListHeaderComponent={() => <ListDivider isCentered />}
      />
    </View>
  )
}
