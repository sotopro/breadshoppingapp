import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { COLORS } from '../../constants/themes/colors';
import { addToCart } from '../../store/actions';
import { styles } from './styles';

const Product = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);
  const { title, price, description, weight } = product || {};

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.weight}>{weight}</Text>
      <Text style={styles.price}>${price}</Text>
      <Button title="Add to cart" onPress={onAddToCart} color={COLORS.primaryDark} />
    </View>
  );
};

export default Product;
