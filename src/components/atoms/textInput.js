import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, Image } from 'react-native';
import { styles } from './styles';

export default function CustomTextInput({ label, placeholder, isPassword }) {

  const eyeIcon = '../../assets/eye.png';
  const eyeHideIcon = '../../assets/eye_closed.png';

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onEyePress = () => {
    isPasswordVisible ?
      setIsPasswordVisible(false) : setIsPasswordVisible(true);
    console.log('press');
  };

  return (
    <View>
      <Text
        style={styles.label}>
        {label}
      </Text>
      <View style={styles.containerTextInput}>
        <TextInput
          secureTextEntry={Boolean(isPassword && !isPasswordVisible)}
          style={styles.input}
          // onChangeText={onChangeText}
          placeholder={placeholder}
        />
        {isPassword && <Pressable onPress={onEyePress}>
          <Image style={styles.eyeIcon}
            source={isPasswordVisible ? require(eyeIcon) : require(eyeHideIcon)}
          />
        </Pressable>}
      </View>
    </View>
  );
}