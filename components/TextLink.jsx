import { Link } from 'expo-router';
import { common } from './theme';

export default function TextLink({ href, children, style }) {
  return (
    <Link href={href} style={[common.link, style]}>
      {children}
    </Link>
  );
}
