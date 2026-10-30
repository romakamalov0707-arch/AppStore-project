import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './theme';
import { formatPrice } from '../utils/cart';

export default function MenuItem({ dish, qty, onAdd }) {
  return (
    <View style={styles.row}>
      <View style={styles.info}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.price}>{formatPrice(dish.price)}</Text>
      </View>

      {qty > 0 && <Text style={styles.qty}>× {qty}</Text>}

      <Pressable onPress={onAdd} hitSlop={8} style={styles.add}>
        <Ionicons name="add" size={20} color={colors.white} />
      </Pressable>
    </View>
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
    marginBottom: 10,
  },
  info: { flex: 1 },
  name: { fontSize: 16, color: colors.text },
  price: { fontSize: 14, color: colors.muted, marginTop: 2 },
  qty: { fontSize: 14, fontWeight: '600', color: colors.primary, marginRight: 12 },
  add: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
