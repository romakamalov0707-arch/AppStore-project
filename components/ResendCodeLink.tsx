import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from './theme';

type Props = {
  onPress: () => void;
};

export default function ResendCodeLink({ onPress }: Props) {
  return (
    <Pressable style={styles.resend} onPress={onPress}>
      <Text style={styles.text}>Отправить код еще раз</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  resend: { alignItems: 'center', marginTop: 20 },
  text: { color: colors.muted, fontSize: 14, textDecorationLine: 'underline' },
});
