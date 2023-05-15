import React from 'react';
import { ScrollView, View } from 'react-native';
import CustomTextInput from '../components/atoms/textInput';

export default function SignUp() {

  const name = 'Name';

  return (
    <ScrollView>
      <View>
        <CustomTextInput text={name} placeholder={name}>
        </CustomTextInput>
      </View>
    </ScrollView>
  );
}