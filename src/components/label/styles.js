import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    marginVertical: 5,
    color: COLORS.text,
  },
  subLabel: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    marginVertical: 5,
    color: COLORS.gray,
  },
});
