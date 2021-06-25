import React, { ReactNode } from 'react'
import { Text, View, Modal, ModalProps } from 'react-native'
import { Background } from '../Background'

import { styles } from './styles'

interface IModalProps extends ModalProps {
  children: ReactNode;
}

export function ModalView({children, ...rest}: IModalProps) {
  return (
    <Modal 
      transparent
      animationType="slide" 
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar}/>
            { children }
          </Background>
        </View>
      </View>
    </Modal>
  )
}