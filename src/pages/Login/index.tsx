import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './styles';
import DigitalIcon from 'react-native-vector-icons/Ionicons';
import ModalFingerPrint from '../../components/ModalFingerPrint';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function Login() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <LinearGradient colors={['#0F0920', '#130931']} style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <Input
        placeholderName={'Usuário'}
        marginBottom={58}
        marginTop={38}
        backgroundColorHolder="#130931"
      />
      <Input placeholderName={'Senha'} backgroundColorHolder="#130931" />
      <Button
        marginTop={58}
        onPress={() => navigation.navigate('Home')}
        textButton={'ENTRAR'}
        buttonHome={false}
      />
      <TouchableOpacity
        style={styles.fingerPrintButton}
        onPress={() => setModalIsOpen(true)}>
        <DigitalIcon name={'finger-print'} size={24} color={'white'} />
        <Text style={styles.fingerPrintText}>Entrar com a digital</Text>
      </TouchableOpacity>
      <ModalFingerPrint
        visible={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      />
    </LinearGradient>
  );
}
