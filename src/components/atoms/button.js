import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export default function CustomButton({ onPress, title }) {
  return (
    <TouchableOpacity activeOpacity={0.6} style={[styles.container, { marginVertical: 10 }]} onPress={onPress}>
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
