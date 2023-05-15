import React from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import { styles } from './styles';

export default function CustomCheckbox({ label, check, setChecked }) {

  const checkIcon = '../../assets/check.png';

  return (
    <Pressable style={styles.containerCheckbox} onPress={() => setChecked(!check)}>
      <View style={styles.innerCheckbox}>
        {check && <Image style={styles.eyeIcon}
          source={require(checkIcon)}
        />}
      </View>
      <Text>
        {label}
      </Text>
    </Pressable>
  );
}