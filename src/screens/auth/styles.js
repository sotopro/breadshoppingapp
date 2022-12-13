import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    marginVertical: 5,
  },
  input: {
    height: 45,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: 'Lato-Regular',
    marginBottom: 10,
  },
  promptButton: {
    width: '100%',
    backgroundColor: COLORS.secondaryDark,
    borderColor: COLORS.primary,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prompt: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  promptMessage: {
    fontSize: 14,
    color: COLORS.text,
    fontFamily: 'Lato-Regular',
  },
});
