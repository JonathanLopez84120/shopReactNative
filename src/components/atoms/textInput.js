import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';
import { Text } from 'react-native-svg';

export default function CustomTextInput({ label, placeholder }) {
  return (
    <View>
      <Text >
        {label}
      </Text>
      <TextInput

        style={styles.input}
        // onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
}