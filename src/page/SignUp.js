import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import CustomTextInput from '../components/atoms/textInput';
import CustomCheckbox from '../components/atoms/checkbox';
import CustomButton from '../components/atoms/button';
import CustomLink from '../components/atoms/link';
import { styles } from './styles';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';


export default function SignUp() {

  const name = 'Name';
  const email = 'E-mail';
  const password = 'Password';

  // const googleIcon = '../../assets/google.png';

  const [isChecked, setIsChecked] = useState(false);
  const checkboxLabel = 'I agree with Terms & Privacy';


  return (
    <ScrollView>
      <View>
        <CustomTextInput label={name} placeholder={name}>
        </CustomTextInput>
        <CustomTextInput label={email} placeholder={email}>
        </CustomTextInput>

        <CustomTextInput isPassword={true} label={password} placeholder={password}>
        </CustomTextInput>
      </View>
      <CustomCheckbox
        check={isChecked}
        setChecked={setIsChecked}
        label={checkboxLabel}
      />

      <CustomButton title={'Sign Up'} /* onPress={onSignUp}*//>
      <CustomLink title={'Or sign up with'} /* onPress={onSignIn}*//>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
      />;

      <View style={styles.container}>
        <Text>
          Already have an account?
        </Text>
        <CustomLink title={'Sign In'} />
      </View>

    </ScrollView>
  );
}