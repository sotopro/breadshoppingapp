import { StyleSheet, StatusBar } from 'react-native';

import { COLORS } from '../../constants/themes/colors';
import { isAndroid } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: COLORS.text,
  },
  containerList: {
    flex: 1,
  },
});
