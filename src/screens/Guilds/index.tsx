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
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
