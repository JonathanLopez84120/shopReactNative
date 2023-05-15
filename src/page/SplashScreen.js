import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import CustomButton from '../components/atoms/button';
import { styles } from './styles';
import CustomLink from '../components/atoms/link';
import { color } from '../utils/color';

export default function SplashScreen({ navigation }) {

  const onSignUp = () => {
    navigation.navigate('SignUp');
  };

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View>
        <Image
          source={require('../assets/splash_image.png')}
          fadeDuration={500}
          style={styles.image}
          resizeMode='contain'
        />
      </View>

      <View>
        <Text style={[styles.text, { color: color.black }]}>You’ll Find </Text>
        <Text style={[styles.text, { color: color.orange, textDecorationLine: 'underline' }]}>You’ll Find All you need</Text>
        <Text style={[styles.text, { color: color.black }]}>All you need</Text>
      </View>

      <View>
        <CustomButton title={'Sign Up'} onPress={onSignUp}/>
        <CustomLink title={'Sign In'} onPress={onSignIn}/>
      </View>
    </ScrollView>
  );
}
