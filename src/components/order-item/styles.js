import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderBottomColor: COLORS.primaryDark,
    borderBottomWidth: 1,
    backgroundColor: COLORS.primary,
    height: 85,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    justifyContent: 'center',
  },
  headerContainer: {},
  date: {},
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {},
  total: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
  },
});
