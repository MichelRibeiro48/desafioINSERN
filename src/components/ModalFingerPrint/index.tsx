import React, {useState, useEffect} from 'react';
import DigitalIcon from 'react-native-vector-icons/Ionicons';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import TouchID from 'react-native-touch-id';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type ModalFingerPrintProps = {
  visible: boolean;
  onClose: () => void;
};
export default function ModalFingerPrint(props: ModalFingerPrintProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const TouchVerify = () => {
    const config = {
      title: 'Autenticação de digital',
      color: 'red',
      sensorErrorDescription: 'Touch ID invalido',
      sensorDescription: '',
      cancelText: 'cancelar',
    };
    TouchID.authenticate('Coloque o dedo', config)
      .then(success => {
        navigation.navigate('Home');
      })
      .catch(err => {
        console.log(err, 'deu ruim');
      });
  };
  return (
    <Modal
      visible={props.visible}
      transparent={true}
      onRequestClose={props.onClose}>
      <TouchableOpacity
        onPress={props.onClose}
        style={styles.containerModalOpen}>
        <View style={styles.container}>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.fingerPrintContainer}>
            <DigitalIcon name={'finger-print'} size={24} color={'black'} />
            <TouchableOpacity onPress={TouchVerify}>
              <Text style={styles.fingerPrintDescription}>
                Desbloqueie seu aplicativo
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.passwordText}>Desbloquear por senha</Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
