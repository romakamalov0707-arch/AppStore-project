import { Text } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';
import { common } from './theme';

type Props = {
  children?: string | null;
  style?: StyleProp<TextStyle>;
};

export default function ErrorText({ children, style }: Props) {
  if (!children) return null;
  return <Text style={[common.error, style]}>{children}</Text>;
}
