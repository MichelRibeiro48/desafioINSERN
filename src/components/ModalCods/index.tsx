import React, {useEffect, useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import Input from '../Input';
import Icon from 'react-native-vector-icons/Ionicons';
import {RadioButton} from 'react-native-paper';
import Button from '../Button';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
import useKeyboard from '../KeyboardOpen';
type ModalCodsProps = {
  visible: boolean;
  onClose: () => void;
  modalType: string;
};
export default function ModalCods(props: ModalCodsProps) {
  const keyboardIsOpen = useKeyboard();
  const [radioButton, setRadioButton] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Hoje', value: 'hoje'},
    {label: 'Semana', value: 'semana'},
  ]);
  return (
    <Modal visible={props.visible} transparent={true}>
      <Pressable
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000bf',
        }}>
        <View
          style={{
            width: '92%',
            height: '90%',
            backgroundColor: '#221C3E',
            alignItems: 'center',
            borderRadius: 16,
            position: 'absolute',
          }}>
          <TouchableOpacity
            style={{alignSelf: 'flex-end', marginRight: 10, marginTop: 10}}
            onPress={props.onClose}>
            <Icon name="close" size={40} color={'white'} />
          </TouchableOpacity>
          {props.modalType === 'Edit' && (
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setItems={setItems}
              setOpen={setOpen}
              setValue={setValue}
              theme="DARK"
              style={styles.selectedDropDown}
              dropDownContainerStyle={styles.dropDown}
              placeholderStyle={{color: 'white'}}
              labelStyle={{color: 'white'}}
              textStyle={{fontSize: 16, fontWeight: '400', color: 'black'}}
            />
          )}
          <Input
            placeholderName={props.modalType === 'Add' ? 'Nome' : 'Novo Nome'}
            backgroundColorHolder="#221C3E"
            marginTop={25}
            largeName={true}
          />
          <Input
            placeholderName={
              props.modalType === 'Add' ? 'Código' : 'Novo Código'
            }
            backgroundColorHolder="#221C3E"
            marginTop={30}
            largeName={true}
          />
          <View
            style={{
              alignSelf: 'flex-start',
              marginLeft: 48,
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioButton
              value="first"
              status={radioButton === 'Emergency' ? 'checked' : 'unchecked'}
              onPress={() => setRadioButton('Emergency')}
              color={'white'}
            />
            <Text style={{color: 'white'}}>Emergência</Text>
          </View>
          <View
            style={{
              alignSelf: 'flex-start',
              marginLeft: 48,
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioButton
              value="first"
              status={radioButton === 'Alert' ? 'checked' : 'unchecked'}
              onPress={() => setRadioButton('Alert')}
              color={'white'}
            />
            <Text style={{color: 'white'}}>Alerta</Text>
          </View>
          <View
            style={{
              alignSelf: 'flex-start',
              marginLeft: 48,
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioButton
              value="first"
              status={radioButton === 'Routine' ? 'checked' : 'unchecked'}
              onPress={() => setRadioButton('Routine')}
              color={'white'}
            />
            <Text style={{color: 'white'}}>Rotina</Text>
          </View>
          <Button
            buttonHome={false}
            textButton={props.modalType === 'Add' ? 'ADICIONAR' : 'SALVAR'}
            marginTop={20}
            onPress={props.onClose}
          />
        </View>
      </Pressable>
    </Modal>
  );
}
