import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';

export default function Profile() {
  return (

    <View>
      <View style={styles.flex}>
        <Text style={styles.titlePage}>
          Profile
        </Text>
        <Image style={styles.image} source={require('../../../assets/logout.png')} />
      </View>
      <View style={styles.container}>
        <Text style={styles.user}>
        Elina Hovakimyan
        </Text>
        <Text style={styles.email}>
        hello@gmail.com
        </Text>
      </View>
    </View>
  );
}
