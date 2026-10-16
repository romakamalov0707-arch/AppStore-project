export function formatPhone(input) {
  let digits = input.replace(/\D/g, '');
  if (input.startsWith('+7') || (digits.length === 11 && /^[78]/.test(digits))) digits = digits.slice(1);
  digits = digits.slice(0, 10);
  if (!digits) return '';

  let result = '+7 (' + digits.slice(0, 3);
  if (digits.length >= 3) result += ')';
  if (digits.length > 3) result += ' ' + digits.slice(3, 6);
  if (digits.length > 6) result += ' ' + digits.slice(6, 8);
  if (digits.length > 8) result += ' ' + digits.slice(8, 10);
  return result;
}

export function isPhoneComplete(value) {
  return value.replace(/\D/g, '').length === 11;
}
