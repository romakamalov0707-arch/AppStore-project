import { StyleSheet, Text } from 'react-native';
import { colors } from './theme';

export default function SectionTitle({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: '700', color: colors.text, marginTop: 16, marginBottom: 12 },
});
