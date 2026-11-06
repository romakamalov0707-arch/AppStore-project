import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './theme';

export default function SuccessIcon() {
  return (
    <View style={styles.circle}>
      <Ionicons name="checkmark" size={56} color={colors.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 32,
    marginBottom: 24,
  },
});
