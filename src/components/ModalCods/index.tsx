import React from 'react';
import {Modal, View, Text, TouchableOpacity, Pressable} from 'react-native';
import Input from '../Input';
import Icon from 'react-native-vector-icons/Ionicons';
type ModalCodsProps = {
  visible: boolean;
  onClose: () => void;
};
export default function ModalCods(props: ModalCodsProps) {
  return (
    <Modal visible={props.visible} transparent={true}>
      <Pressable
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000bf',
        }}>
        <View
          style={{
            width: '92%',
            height: 345,
            backgroundColor: '#221C3E',
            alignItems: 'center',
            borderRadius: 16,
          }}>
          <TouchableOpacity
            style={{alignSelf: 'flex-end', marginRight: 10, marginTop: 10}}
            onPress={props.onClose}>
            <Icon name="close" size={40} color={'white'} />
          </TouchableOpacity>
          <Input
            placeholderName="Nome"
            backgroundColorHolder="#221C3E"
            marginTop={30}
          />
          <Input
            placeholderName="Código"
            backgroundColorHolder="#221C3E"
            marginTop={30}
          />
        </View>
      </Pressable>
    </Modal>
  );
}
