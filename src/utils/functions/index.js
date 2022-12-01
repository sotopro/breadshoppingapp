import { Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};
