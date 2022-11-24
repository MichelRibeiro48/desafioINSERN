import React, {useState, useEffect} from 'react';
import DigitalIcon from 'react-native-vector-icons/Ionicons';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
type ModalFingerPrintProps = {
  visible: boolean,
  onClose: () => void,
}
export default function ModalFingerPrint(props: ModalFingerPrintProps) {
  return(
    <Modal visible={props.visible} transparent={true}>
      <TouchableOpacity onPress={props.onClose} style={{flex: 1, backgroundColor: '#000000bf'}}>
        <View style={styles.container}>
          <Text style={{color: 'black', fontSize: 48, fontWeight: '700'}}>Login</Text>
          <View style={{flexDirection: 'row', marginTop: 36}}>
            <DigitalIcon name={'finger-print'} size={24} color={'black'}/>
            <Text style={{fontWeight: '400', fontSize: 16, marginLeft: 8}}>Desbloqueie seu aplicativo</Text>
          </View>
            <Text style={{marginTop: 40, color: '#0368FF', fontWeight: '600', fontSize: 18}}>Desbloquear por senha</Text>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}