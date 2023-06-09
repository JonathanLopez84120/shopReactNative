import React, { useState } from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../../../data/products';
import { categories } from '../../../data/categories';
import ProductHomeItem from '../../../components/ProductHomeItem';
import CategoryBox from '../../../components/CategoryBox';
import { styles } from './styles';

export default function Home({navigation}) {

  const [selectedCategory, setSelectedCategory] = useState();

  const onProductDetail = (productId) => {
    navigation.navigate('ProductDetail', { productId });
  };  

  const renderCategory = (item) => {
    const category = item.item;
    return (
      <CategoryBox
        {...category}
        isSelected={category === selectedCategory}
        onPress={() => setSelectedCategory(category)}
      ></CategoryBox>
    );
  };

  const renderProductItem = (item) => {

    const product = item.item;

    return (
      <ProductHomeItem
        {...product}
        onPress={() => onProductDetail(product.id)}
      />
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.flex}>
        <Image style={styles.image} source={require('../../../assets/search.png')}/>
        <Text style={styles.titlePage}>
          Find All You Need
        </Text>
      </View>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => String(item.id)}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <FlatList style={styles.marginBot}
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListFooterComponent={<View style={{ height: 100 }}></View>}
      />
    </SafeAreaView>
  );
}
