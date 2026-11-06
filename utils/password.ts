export function validatePassword(password: string): string | null {
  if (password.length < 8) return 'Пароль должен быть не менее 8 символов';
  if (!/[A-ZА-ЯЁ]/.test(password) || !/[a-zа-яё]/.test(password))
    return 'Нужны прописные и строчные буквы';
  return null;
}
