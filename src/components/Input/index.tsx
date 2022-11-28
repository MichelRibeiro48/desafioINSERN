import React from 'react';
import {TextInput, View, Text} from 'react-native';
import styles from './styles';

type InputProps = {
  backgroundColorHolder: string;
  placeholderName: string;
  marginBottom?: number;
  marginTop?: number;
};
export default function Input(props: InputProps) {
  return (
    <View
      style={[
        styles.input,
        {marginBottom: props.marginBottom, marginTop: props.marginTop},
      ]}>
      <View
        style={[
          styles.textTrick,
          props.placeholderName === 'Senha' && {width: 40},
          {backgroundColor: props.backgroundColorHolder},
        ]}>
        <Text style={styles.textInputPlaceholder}>{props.placeholderName}</Text>
      </View>
      <TextInput
        style={styles.inputText}
        secureTextEntry={props.placeholderName === 'Senha' && true}
      />
    </View>
  );
}
