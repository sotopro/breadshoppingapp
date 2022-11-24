import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { colors } from '../constants/themes/colors';
import { Categories, Product, Products } from '../screens';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.backgroundDark,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontFamily: 'Lato-Bold',
        },
      }}>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
