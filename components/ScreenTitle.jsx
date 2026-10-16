import { StyleSheet, Text, View } from 'react-native';
import { colors } from './theme';

export default function ScreenTitle({ title, subtitle, center = false }) {
  return (
    <View style={[styles.header, center && styles.headerCenter]}>
      <Text style={[styles.title, center && styles.textCenter]}>{title}</Text>

      {typeof subtitle === 'string' ? (
        <Text style={[styles.subtitle, center && styles.textCenter]}>{subtitle}</Text>
      ) : (
        subtitle
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: { marginBottom: 28 },
  headerCenter: { alignItems: 'center', marginTop: 24 },
  title: { fontSize: 24, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: 14, color: colors.muted, marginTop: 8, lineHeight: 20 },
  textCenter: { textAlign: 'center' },
});
