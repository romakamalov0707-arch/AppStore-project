import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors } from './theme';

export default function ProfileButton() {
  return (
    <Pressable onPress={() => router.push('/Profile')} hitSlop={8} style={styles.button}>
      <Ionicons name="person" size={18} color={colors.primary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.field,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
