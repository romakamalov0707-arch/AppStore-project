import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './theme';
import { formatPrice } from '../utils/cart';

export default function CartItem({ item, onPlus, onMinus }) {
  return (
    <View style={styles.row}>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{formatPrice(item.price * item.qty)}</Text>
      </View>

      <Pressable onPress={onMinus} hitSlop={8} style={styles.button}>
        <Ionicons name="remove" size={18} color={colors.primary} />
      </Pressable>
      <Text style={styles.qty}>{item.qty}</Text>
      <Pressable onPress={onPlus} hitSlop={8} style={styles.button}>
        <Ionicons name="add" size={18} color={colors.primary} />
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
  button: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qty: { width: 32, textAlign: 'center', fontSize: 16, fontWeight: '600', color: colors.text },
});
