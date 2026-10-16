import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './theme';

export default function TermsCheckbox({ checked, onChange }) {
  return (
    <Pressable style={styles.terms} onPress={() => onChange(!checked)}>
      <View style={[styles.checkbox, checked && styles.checkboxOn]}>
        {checked && <Ionicons name="checkmark" size={16} color={colors.white} />}
      </View>
      <Text style={styles.text}>
        Создавая учетную запись, вы соглашаетесь с нашими <Text style={styles.link}>Условиями</Text> использования.
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  terms: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 24, marginTop: 4 },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkboxOn: { backgroundColor: colors.primary, borderColor: colors.primary },
  text: { flex: 1, fontSize: 13, color: colors.text, lineHeight: 19 },
  link: { color: colors.primary, fontWeight: '500' },
});
