import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { COLORS } from '../constants/themes/colors';
import { Orders } from '../screens';
import { isIOS } from '../utils';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? COLORS.backgroundDark : COLORS.backgroundLight,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontFamily: 'Lato-Bold',
        },
        presentation: 'card',
        headerBackTitle: '',
      }}>
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrderNavigator;
