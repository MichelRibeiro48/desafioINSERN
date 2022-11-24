import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './styles';
import DigitalIcon from 'react-native-vector-icons/Ionicons';
import ModalFingerPrint from '../../components/ModalFingerPrint';

export default function Login() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <LinearGradient colors={['#0F0920', '#130931']} style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={{width: 200, height: 200, marginTop: 49}}/>
      <Text style={styles.title}>Login</Text>
      <Input placeholderName={'Usuário'} marginBottom={58} marginTop={38}/>
      <Input placeholderName={'Senha'}/>
      <Button marginTop={58}/>
      <TouchableOpacity style={{marginTop: 30, flexDirection: 'row'}} onPress={() => setModalIsOpen(true)}>
        <DigitalIcon name={'finger-print'} size={24} color={'white'}/>
        <Text style={{color: 'white', fontWeight: '400', fontSize: 14, marginLeft: 8}}>Entrar com a digital</Text>
      </TouchableOpacity>
      <ModalFingerPrint visible={modalIsOpen} onClose={() => setModalIsOpen(false)}/>
    </LinearGradient>
  );
}
