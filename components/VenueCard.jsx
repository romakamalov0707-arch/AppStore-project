import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './theme';

export default function VenueCard({ venue, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.icon}>
        <Ionicons name={venue.icon} size={22} color={colors.primary} />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{venue.name}</Text>
        <Text style={styles.meta} numberOfLines={1}>
          {venue.category} · {venue.address}
        </Text>
      </View>

      <Ionicons name="star" size={14} color={colors.primary} />
      <Text style={styles.rating}>{venue.rating}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.field,
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  pressed: { opacity: 0.7 },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  info: { flex: 1, marginRight: 8 },
  name: { fontSize: 16, fontWeight: '600', color: colors.text },
  meta: { fontSize: 13, color: colors.muted, marginTop: 4 },
  rating: { fontSize: 14, fontWeight: '600', color: colors.text, marginLeft: 4 },
});
