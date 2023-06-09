import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { products } from '../../../data/products';
import Button from '../../../components/Button';

export default function ProductDetail({ route, navigation }) {
  const { productId } = route.params;
  const product = products.find(item => item.id === productId);

  return (
    <View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image style={styles.backImage} source={require('../../../assets/back.png')} />
      </TouchableOpacity>
      <Image source={{ uri: product.image }} style={styles.image} />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.productName}>{product.title}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <View style={styles.flex}>
          <TouchableOpacity style={styles.favButton} onPress={() => console.log('janne os cours')}>
            <Image style={styles.favImage} source={require('../../../assets/bookmark_blue.png')} />
          </TouchableOpacity>
          <Button style={styles.contactButton} title={'Contact Seller'} onPress={() => console.log('janne os cours le retour')} />
        </View>
      </ScrollView>
    </View>
  );
}
