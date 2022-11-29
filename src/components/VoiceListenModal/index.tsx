import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import WaveIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MicrofoneIcon from 'react-native-vector-icons/FontAwesome';
import CloseIcon from 'react-native-vector-icons/AntDesign';

type VoiceListenModalProps = {
  visible: boolean;
  onClose: () => void;
};
export default function VoiceListenModal(props: VoiceListenModalProps) {
  return (
    <Modal
      visible={props.visible}
      transparent={true}
      onRequestClose={props.onClose}
      animationType={'slide'}>
      <View
        style={{
          width: '100%',
          height: 220,
          backgroundColor: 'white',
          top: '75%',
        }}>
        <TouchableOpacity onPress={props.onClose}>
          <CloseIcon
            name={'close'}
            size={24}
            color={'black'}
            style={{alignSelf: 'flex-end', margin: 10}}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            alignSelf: 'center',
            fontWeight: '700',
            fontSize: 36,
            bottom: 30,
          }}>
          Escutando
        </Text>
        <View style={{flexDirection: 'row'}}>
          <MicrofoneIcon
            name={'microphone'}
            size={48}
            color={'red'}
            style={{marginLeft: 70}}
          />
          <WaveIcon name={'waveform'} size={48} color={'black'} />
          <WaveIcon
            name={'waveform'}
            size={48}
            color={'black'}
            style={{right: 15}}
          />
          <WaveIcon
            name={'waveform'}
            size={48}
            color={'black'}
            style={{right: 30}}
          />
          <WaveIcon
            name={'waveform'}
            size={48}
            color={'black'}
            style={{right: 45}}
          />
          <WaveIcon
            name={'waveform'}
            size={48}
            color={'black'}
            style={{right: 60}}
          />
          <WaveIcon
            name={'waveform'}
            size={48}
            color={'black'}
            style={{right: 75}}
          />
        </View>
      </View>
    </Modal>
  );
}
