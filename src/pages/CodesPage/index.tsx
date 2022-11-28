import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import data from './mockData/mock';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ModalCods from '../../components/ModalCods';
export default function CodesPage() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [alertList, setAlertList] = useState('Emergency');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <LinearGradient colors={['#0F0920', '#130931']} style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 70,
          backgroundColor: '#221C3E',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon
            name={'arrowleft'}
            size={48}
            color={'white'}
            style={{marginLeft: 10}}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 48,
          color: 'white',
          paddingHorizontal: 60,
          marginBottom: 36,
          marginTop: 30,
        }}>
        Lista de códigos
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: 123,
            height: 41,
            backgroundColor: '#0368FF',
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 9,
          }}
          onPress={() => setModalVisible(true)}>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>
            Adicionar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 123,
            height: 41,
            backgroundColor: '#221C3E',
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>
            Editar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 37}}>
        <TouchableOpacity
          style={[styles.buttonAlerts, {backgroundColor: '#FF5757'}]}
          onPress={() => setAlertList('Emergency')}>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>
            Emer.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonAlerts, {backgroundColor: '#FFD15C', width: 84}]}
          onPress={() => setAlertList('Alerts')}>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>
            Alertas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonAlerts, {backgroundColor: '#6FB15F'}]}
          onPress={() => setAlertList('Routine')}>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>
            Rotina
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 253,
          height: 1,
          backgroundColor: 'white',
          marginTop: 17,
          marginBottom: 16,
        }}
      />
      <FlatList
        data={data}
        renderItem={({item}) =>
          item.idName === alertList && (
            <TouchableOpacity
              style={[
                styles.codesList,
                item.idName === 'Alerts'
                  ? {backgroundColor: '#FFD15C'}
                  : item.idName === 'Routine' && {backgroundColor: '#6FB15F'},
              ]}>
              <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>
                {item.cod}
              </Text>
            </TouchableOpacity>
          )
        }
      />
      <ModalCods
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </LinearGradient>
  );
}
