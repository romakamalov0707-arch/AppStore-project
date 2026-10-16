import { Platform } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

if (Platform.OS === 'web' && typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    input::-ms-reveal { display: none !important; }
    input::-ms-clear { display: none !important; }
    input::-webkit-credentials-auto-fill-button { display: none !important; visibility: hidden; }
    input::-webkit-contacts-auto-fill-button { display: none !important; visibility: hidden; }
  `;
  document.head.appendChild(style);
}

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#fff' } }} />
    </>
  );
}
