import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from './BackButton';
import ScreenTitle from './ScreenTitle';
import { colors } from './theme';

export default function Screen({ title, subtitle, center = false, showBack = true, headerRight, footer, children }) {
  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <View style={styles.top}>
            {showBack ? <BackButton /> : <View />}
            {headerRight}
          </View>

          <ScreenTitle title={title} subtitle={subtitle} center={center} />

          {children}
        </ScrollView>
        {footer && <View style={styles.footer}>{footer}</View>}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.white },
  flex: { flex: 1 },
  content: { paddingHorizontal: 20, paddingBottom: 24, flexGrow: 1 },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 24,
    minHeight: 36,
  },
  footer: { paddingHorizontal: 20, paddingBottom: 16 },
});
