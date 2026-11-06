import type { ReactNode } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { Link } from 'expo-router';
import type { Href } from 'expo-router';
import { common } from './theme';

type Props = {
  href: Href;
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};

export default function TextLink({ href, children, style }: Props) {
  return (
    <Link href={href} style={[common.link, style]}>
      {children}
    </Link>
  );
}
