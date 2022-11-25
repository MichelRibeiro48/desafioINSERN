import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import CheckIcon from 'react-native-vector-icons/EvilIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Hoje', value: 'hoje'},
    {label: 'Semana', value: 'semana'},
  ]);
  return (
    <LinearGradient colors={['#0F0920', '#130931']} style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.profileText}>Ola, John!</Text>
        <Image
          source={require('../../assets/image.png')}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.SecurityContainer}>
        <View style={styles.safetyContainer}>
          <CheckIcon name={'check'} size={48} color={'white'} />
          <Text style={styles.textSecurity}>Seguro</Text>
        </View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setItems={setItems}
          setOpen={setOpen}
          setValue={setValue}
          theme="LIGHT"
          style={styles.selectedDropDown}
          dropDownContainerStyle={styles.dropDown}
          textStyle={{fontSize: 16, fontWeight: '400', color: 'black'}}
        />
        <Text style={styles.textPercent}>12%</Text>
        <Text style={styles.textDanger}>Nível de ameaça</Text>
        <Text style={styles.textLorem}>Lorem ipsum</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonCodes}
        onPress={() => navigation.navigate('CodesPage')}>
        <MaterialIcon
          name={'cellphone-information'}
          size={28}
          color={'white'}
        />
        <Text style={styles.textCodes}>Códigos</Text>
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        <Button
          textButton="HISTÓRICO DE ENVIOS"
          buttonHome={true}
          marginTop={23}
        />
        <Button
          textButton="ENVIAR FEEDBACK DO DIA"
          buttonHome={true}
          marginTop={16}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 30,
          width: '100%',
          height: 100,
          backgroundColor: '#221C3E',
        }}>
        <TouchableOpacity>
          <MaterialIcon
            name={'microphone'}
            size={52}
            color={'white'}
            style={{
              backgroundColor: '#423A64',
              borderRadius: 100,
              padding: 10,
              marginTop: 8,
            }}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
