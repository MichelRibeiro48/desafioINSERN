import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

type ButtonProps = {
  marginTop?: number,
  onPress?: () => void;
}
export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, {marginTop: props.marginTop}]} onPress={props.onPress}>
      <Text style={styles.text}>ENTRAR</Text>
    </TouchableOpacity>
  )
}