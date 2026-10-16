import { Text } from 'react-native';
import { common } from './theme';

export default function ErrorText({ children, style }) {
  if (!children) return null;
  return <Text style={[common.error, style]}>{children}</Text>;
}
