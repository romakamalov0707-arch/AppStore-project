import { Alert, Platform } from 'react-native';

export function notify(message: string) {
  if (Platform.OS === 'web') window.alert(message);
  else Alert.alert(message);
}
