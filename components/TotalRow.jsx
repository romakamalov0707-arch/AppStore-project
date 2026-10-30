import { StyleSheet, Text, View } from 'react-native';
import { colors } from './theme';
import { formatPrice } from '../utils/cart';

export default function TotalRow({ total }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>Итого</Text>
      <Text style={styles.total}>{formatPrice(total)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  label: { fontSize: 16, color: colors.muted },
  total: { fontSize: 20, fontWeight: '700', color: colors.text },
});
