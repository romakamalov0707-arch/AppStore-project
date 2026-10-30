import { router, useLocalSearchParams } from 'expo-router';
import Screen from '../components/Screen';
import SuccessIcon from '../components/SuccessIcon';
import InfoRow from '../components/InfoRow';
import HomeButton from '../components/HomeButton';

export default function OrderSuccess() {
  const { number, address } = useLocalSearchParams();

  return (
    <Screen
      center
      showBack={false}
      title="Заказ принят!"
      subtitle="Курьер привезёт заказ примерно через 30–40 минут"
      footer={<HomeButton onPress={() => router.replace('/Home')} />}
    >
      <SuccessIcon />
      <InfoRow icon="receipt" label="Номер заказа" value={`#${number}`} />
      <InfoRow icon="location" label="Адрес доставки" value={address} />
    </Screen>
  );
}
