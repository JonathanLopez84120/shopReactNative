import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export default function CustomLink({ onPress, title }) {

  return (
    <TouchableOpacity activeOpacity={0.6} style={[styles.link, { marginVertical: 10 }]} onPress={onPress}>
      <Text style={styles.buttonLinkText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}