import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './theme';

export default function InfoRow({ icon, label, value, onPress }) {
  return (
    <Pressable onPress={onPress} disabled={!onPress} style={styles.row}>
      <Ionicons name={icon} size={20} color={colors.primary} style={styles.icon} />
      <View style={styles.info}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      {onPress && <Ionicons name="chevron-forward" size={18} color={colors.placeholder} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.field,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
  },
  icon: { marginRight: 12 },
  info: { flex: 1 },
  label: { fontSize: 12, color: colors.muted },
  value: { fontSize: 16, color: colors.text, marginTop: 2 },
});
