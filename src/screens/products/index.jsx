import React from 'react';
import { View, Text, Button } from 'react-native';

import { COLORS } from '../../constants/themes/colors';
import { styles } from './styles';

const Products = ({ navigation, route }) => {
  const { categoryId, title } = route.params;

  console.warn('categoryId', categoryId, 'title', title);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Button
        title="Go to Product"
        color={COLORS.primaryDark}
        onPress={() => navigation.navigate('Product')}
      />
    </View>
  );
};

export default Products;
