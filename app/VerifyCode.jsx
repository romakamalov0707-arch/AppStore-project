import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import Screen from '../components/Screen';
import CodeInput from '../components/CodeInput';
import ContinueButton from '../components/ContinueButton';
import ResendCodeLink from '../components/ResendCodeLink';
import { colors } from '../components/theme';

const EMPTY_CODE = ['', '', '', ''];

export default function VerifyCode() {
  const { phone } = useLocalSearchParams();
  const [code, setCode] = useState(EMPTY_CODE);
  const [attempt, setAttempt] = useState(0);

  const onResend = () => {
    setCode(EMPTY_CODE);
    setAttempt(attempt + 1);
  };

  return (
    <Screen
      center
      title="Подтвердить номер"
      subtitle={
        <View style={styles.subtitleWrap}>
          <Text style={styles.subtitle}>Мы только что отправили код на</Text>
          <Text style={styles.phone}>{phone || '+7 (700) 555 77 55'}</Text>
        </View>
      }
    >
      <CodeInput key={attempt} value={code} onChange={setCode} />

      <ContinueButton disabled={code.some((d) => !d)} onPress={() => router.push('/ResetPassword')} />

      <ResendCodeLink onPress={onResend} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  subtitleWrap: { alignItems: 'center', marginTop: 8 },
  subtitle: { fontSize: 14, color: colors.muted },
  phone: { fontSize: 14, color: colors.text, fontWeight: '600', marginTop: 4 },
});
