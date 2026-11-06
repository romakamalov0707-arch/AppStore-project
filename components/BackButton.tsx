import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors } from './theme';

export default function BackButton() {
  return (
    <Pressable onPress={() => router.canGoBack() && router.back()} hitSlop={12} style={styles.back}>
      <Ionicons name="arrow-back" size={22} color={colors.text} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  back: { width: 32, height: 32, justifyContent: 'center' },
});
