import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './theme';

export default function Input({ icon, value, style, ...props }) {
  return (
    <View style={[styles.wrap, style]}>
      {icon ? (
        <Ionicons name={icon} size={20} color={colors.placeholder} style={styles.icon} />
      ) : null}
      <TextInput
        value={value}
        placeholderTextColor={colors.placeholder}
        style={styles.input}
        autoCapitalize="none"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.field,
    borderRadius: 12,
    height: 56,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  icon: { marginRight: 12 },
  input: { flex: 1, fontSize: 16, color: colors.text, height: '100%', outlineStyle: 'none' },
});
