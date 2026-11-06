import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#780e9f',
  text: '#111111',
  muted: '#9A9A9F',
  placeholder: '#A8A8AD',
  field: '#F5F5F7',
  border: '#E5E5EA',
  white: '#FFFFFF',
  error: '#E5383B',
};

export const common = StyleSheet.create({
  error: { color: colors.error, fontSize: 13, marginBottom: 12 },
  link: { color: colors.primary, fontSize: 14, fontWeight: '500' },
  muted: { color: colors.muted, fontSize: 14 },
});
