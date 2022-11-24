import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './styles';

type InputProps = {
  placeholderName: string,
  marginBottom?: number,
  marginTop?: number,
}
export default function Input(props: InputProps) {
  return (
    <View style={[styles.input, {marginBottom: props.marginBottom, marginTop: props.marginTop}]}>
      <View style={[styles.textTrick, props.placeholderName === 'Senha' && {width: 40}]}><Text style={styles.textInputPlaceholder}>{props.placeholderName}</Text></View>
      <TextInput style={{color: 'white', bottom: 5, marginLeft: 16}} secureTextEntry={props.placeholderName === 'Senha' && true}/>
    </View>
  )
}