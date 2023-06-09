import React from 'react';
import { Pressable, Text, View, FlatList } from 'react-native';
import { styles } from './styles';

export default function Card({ bigTitle, littleTitle, onPress, isIcon }) {
    return(
        <View>
  <Text style={ bigTitle ? styles.bigTitle : styles.littleTitle}>{bigTitle ? bigTitle : littleTitle}</Text>
  <Text h4>be-nev-o=lent</Text>
  <Text>adjective</Text>
  <Text>
    well meaning and kindly.
    <br />
    {'"a benevolent smile"'}
  </Text>
  <Button size="sm" type="clear">
    Learn More
  </Button>
        </View>
      );
}