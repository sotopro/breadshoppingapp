import React from 'react';
import { FlatList } from 'react-native';

import { ProductItem } from '../../components';
import { PRODUCTS } from '../../constants/data/index';
import { COLORS } from '../../constants/themes/colors';
import { styles } from './styles';

const Products = ({ navigation, route }) => {
  const { categoryId, color } = route.params;

  const filteredProducts = PRODUCTS.filter((product) => product.categoryId === categoryId);

  console.warn('filteredProducts', filteredProducts);
  const onSelected = (item) => {
    navigation.navigate('Product', { title: item.title, productId: item.id });
  };
  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} color={color} />
  );
  return (
    <FlatList
      data={filteredProducts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
    />
  );
};

export default Products;
