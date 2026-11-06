import { StyleSheet, Text, View } from 'react-native';
import { colors } from './theme';
import { formatPrice } from '../utils/cart';

export default function OrderCard({ order }) {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <Text style={styles.number}>Заказ #{order.number}</Text>
        <Text style={styles.status}>Принят</Text>
      </View>

      <Text style={styles.date}>{order.date}</Text>

      {order.items.map((item) => (
        <Text key={item.id} style={styles.item}>
          {item.name} × {item.qty}
        </Text>
      ))}

      <View style={styles.bottom}>
        <Text style={styles.address} numberOfLines={1}>
          {order.address}
        </Text>
        <Text style={styles.total}>{formatPrice(order.total)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.field,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  number: { fontSize: 16, fontWeight: '700', color: colors.text },
  status: { fontSize: 13, fontWeight: '600', color: colors.primary },
  date: { fontSize: 13, color: colors.muted, marginTop: 4, marginBottom: 8 },
  item: { fontSize: 14, color: colors.text, marginBottom: 2 },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginTop: 10,
    paddingTop: 10,
  },
  address: { flex: 1, fontSize: 13, color: colors.muted, marginRight: 8 },
  total: { fontSize: 16, fontWeight: '700', color: colors.text },
});
