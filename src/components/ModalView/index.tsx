import React, { ReactNode } from 'react'
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native'
import { Background } from '../Background'

import { styles } from './styles'

interface IModalProps extends ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalView({children, closeModal, ...rest}: IModalProps) {
  return (
    <Modal 
      transparent
      animationType="slide" 
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar}/>
              { children }
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}