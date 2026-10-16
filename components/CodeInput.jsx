import { useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors } from './theme';

export default function CodeInput({ value, onChange }) {
  const inputs = useRef([]);

  const changeDigit = (text, index) => {
    const digits = text.replace(/\D/g, '');
    const newCode = [...value];

    if (digits.length === 0) {
      newCode[index] = '';
    }
    for (let i = 0; i < digits.length; i++) {
      if (index + i < value.length) {
        newCode[index + i] = digits[i];
      }
    }
    onChange(newCode);

    if (digits.length > 0) {
      const nextIndex = Math.min(index + digits.length, value.length - 1);
      inputs.current[nextIndex].focus();
    }
  };

  const pressKey = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !value[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.row}>
      {value.map((digit, index) => (
        <TextInput
          key={index}
          ref={(el) => (inputs.current[index] = el)}
          value={digit}
          onChangeText={(text) => changeDigit(text, index)}
          onKeyPress={(e) => pressKey(e, index)}
          keyboardType="number-pad"
          selectTextOnFocus
          autoFocus={index === 0}
          style={[styles.cell, digit && styles.cellFilled]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24, gap: 12 },
  cell: {
    flex: 1,
    minWidth: 0,
    width: 0,
    height: 64,
    borderRadius: 12,
    backgroundColor: colors.field,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    borderWidth: 1,
    borderColor: 'transparent',
    outlineStyle: 'none',
  },
  cellFilled: { borderColor: colors.primary },
});
