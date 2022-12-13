import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import data from './mockData/mock';
import EditIcon from 'react-native-vector-icons/Feather';

export default function HistoricPage() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <LinearGradient colors={['#0F0920', '#130931']} style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon
            name={'arrowleft'}
            size={48}
            color={'white'}
            style={{marginLeft: 10}}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.textTitle}>Seu histórico de envios</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.cardContainer}>
              <View>
                <Text>{item.cod}</Text>
                <View style={styles.dateContainer}>
                  <Icon name={'clockcircleo'} size={18} color={'#ACACAC'} />
                  <Text style={{marginLeft: 9}}>{item.time}</Text>
                </View>
              </View>
              <Text style={styles.descriptionContainer}>
                {item.description}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 50,
                height: 110,
                backgroundColor: 'white',
                marginTop: 25,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
              }}>
              <EditIcon name={'edit'} size={28} color={'black'} />
            </TouchableOpacity>
          </View>
        )}
      />
    </LinearGradient>
  );
}
