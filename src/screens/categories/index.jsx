import React from 'react';
import { View, Text, Button } from 'react-native';

import { colors } from '../../constants/themes/colors';
import { styles } from './styles';

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <Button
        title="Go to Products"
        color={colors.primaryDark}
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  );
};

export default Categories;
