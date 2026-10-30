import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './theme';

export default function EmptyState({ icon, text }) {
  return (
    <View style={styles.box}>
      <Ionicons name={icon} size={56} color={colors.placeholder} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { alignItems: 'center', marginTop: 48, marginBottom: 32 },
  text: { fontSize: 16, color: colors.muted, marginTop: 12, textAlign: 'center' },
});
