import { StyleSheet, Text } from 'react-native';
import { colors } from './theme';

type Props = {
  children: string;
};

export default function SectionTitle({ children }: Props) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: '700', color: colors.text, marginTop: 16, marginBottom: 12 },
});
