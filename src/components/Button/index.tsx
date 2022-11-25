import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

type ButtonProps = {
  marginTop?: number;
  onPress?: () => void;
  textButton: string;
  buttonHome: boolean;
};
export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      style={
        props.buttonHome
          ? [styles.containerHome, {marginTop: props.marginTop}]
          : [styles.container, {marginTop: props.marginTop}]
      }
      onPress={props.onPress}>
      <Text style={styles.text}>{props.textButton}</Text>
    </TouchableOpacity>
  );
}
