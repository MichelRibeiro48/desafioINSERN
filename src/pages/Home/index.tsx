import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  Vibration,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import CheckIcon from 'react-native-vector-icons/EvilIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-voice/voice';
import VoiceListenModal from '../../components/VoiceListenModal';
import data from '../CodesPage/mockData/mock';

export default function Home() {
  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [deuCerto, setDeuCerto] = useState(false);
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [end, setEnd] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Hoje', value: 'hoje'},
    {label: 'Semana', value: 'semana'},
  ]);
  const [modalVoice, setModalVoice] = useState(false);
  useEffect(() => {
    if (end) {
      console.log(results);
      if (
        data.find(o => o.cod === results[0]) ||
        data.find(o => o.cod === results[1])
      ) {
        setDeuCerto(true);
        setModalVoice(false);
        VoiceSuccess();
        return;
      } else {
        setDeuCerto(false);
        VoiceFailed();
      }
    }
  }, [results]);
  const onSpeechStart = (e: any) => {
    console.log('onSpeechStart: ', e);
    setStarted('√');
  };
  const onSpeechEnd = (e: any) => {
    console.log('onSpeechEnd: ', e);
    setModalVoice(false);
    setEnd('√');
  };
  const onSpeechResults = (e: SpeechResultsEvent) => {
    console.log('onSpeechResults: ', e);
    setResults(e.value);
  };
  const _startRecognizing = async () => {
    _clearState();
    try {
      await Voice.start('pt_BR');
      console.log('called start');
    } catch (e) {
      console.error(e);
    }
  };
  const _clearState = () => {
    setEnd('');
    setStarted('');
    setResults([]);
  };
  const modalOpen = () => {
    setModalVoice(true);
  };
  const VoiceSuccess = () => {
    ToastAndroid.show('Código registrado com sucesso', ToastAndroid.LONG);
  };
  const VoiceFailed = () => {
    ToastAndroid.show('Código não Registrado', ToastAndroid.LONG);
    Vibration.vibrate(500);
  };
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
          onPress={() => navigation.navigate('HistoricPage')}
        />
        <Button
          textButton="ENVIAR FEEDBACK DO DIA"
          buttonHome={true}
          marginTop={16}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          modalOpen();
          _startRecognizing();
        }}
        style={styles.microfoneCircle}>
        <MaterialIcon name={'microphone'} size={52} color={'white'} />
      </TouchableOpacity>
      <VoiceListenModal
        visible={modalVoice}
        onClose={() => setModalVoice(false)}
      />
    </LinearGradient>
  );
}
