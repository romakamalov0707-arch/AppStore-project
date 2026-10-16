import { router } from 'expo-router';
import Screen from '../components/Screen';
import InfoRow from '../components/InfoRow';
import LogoutButton from '../components/LogoutButton';
import { user, clearUser } from '../utils/user';

export default function Profile() {
  const onLogout = () => {
    clearUser();
    if (router.canDismiss()) router.dismissAll();
    router.replace('/Login');
  };

  return (
    <Screen title="Профиль" subtitle="Ваши данные" footer={<LogoutButton onPress={onLogout} />}>
      <InfoRow icon="person" label="Имя" value={user.name || 'Гость'} />
      <InfoRow icon="call" label="Телефон" value={user.phone || 'Не указан'} />
      <InfoRow
        icon="location"
        label="Город"
        value={user.city || 'Не выбран'}
        onPress={() => router.push('/SelectCity')}
      />
    </Screen>
  );
}
