import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';

const Product = ({ navigation }) => {
  const product = useSelector((state) => state.products.selected);
  const { title, price, description, weight } = product || {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.weight}>{weight}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

export default Product;
