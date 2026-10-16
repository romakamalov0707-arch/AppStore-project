import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './theme';

export default function CitySelect({ value, onChange, cities }) {
  const [open, setOpen] = useState(false);

  const choose = (c) => {
    onChange(c);
    setOpen(false);
  };

  return (
    <>
      <Pressable style={[styles.select, open && styles.selectOpen]} onPress={() => setOpen(!open)}>
        <Text style={value ? styles.value : styles.placeholder}>{value || 'Выбрать город'}</Text>
        <Ionicons name={open ? 'chevron-up' : 'chevron-down'} size={20} color={colors.primary} />
      </Pressable>

      {open && (
        <View style={styles.list}>
          {cities.map((c) => (
            <Pressable key={c} style={styles.item} onPress={() => choose(c)}>
              <Text style={[styles.itemText, c === value && styles.itemActive]}>{c}</Text>
              {c === value && <Ionicons name="checkmark" size={18} color={colors.primary} />}
            </Pressable>
          ))}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  select: {
    height: 56,
    borderRadius: 12,
    backgroundColor: colors.field,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectOpen: { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
  placeholder: { fontSize: 16, color: colors.placeholder },
  value: { fontSize: 16, color: colors.text },
  list: {
    backgroundColor: colors.field,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: { fontSize: 16, color: colors.text },
  itemActive: { color: colors.primary, fontWeight: '600' },
});
