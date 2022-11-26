import React, {useState, useEffect} from 'react';
import DigitalIcon from 'react-native-vector-icons/Ionicons';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
type ModalFingerPrintProps = {
  visible: boolean;
  onClose: () => void;
};
export default function ModalFingerPrint(props: ModalFingerPrintProps) {
  return (
    <Modal visible={props.visible} transparent={true}>
      <TouchableOpacity
        onPress={props.onClose}
        style={styles.containerModalOpen}>
        <View style={styles.container}>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.fingerPrintContainer}>
            <DigitalIcon name={'finger-print'} size={24} color={'black'} />
            <Text style={styles.fingerPrintDescription}>
              Desbloqueie seu aplicativo
            </Text>
          </View>
          <Text style={styles.passwordText}>Desbloquear por senha</Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
