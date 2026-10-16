import { useState } from 'react';
import { router } from 'expo-router';
import Screen from '../components/Screen';
import CitySelect from '../components/CitySelect';
import ContinueButton from '../components/ContinueButton';
import { user } from '../utils/user';

const CITIES = ['Алматы', 'Астана', 'Шымкент', 'Караганда', 'Актобе', 'Тараз', 'Павлодар', 'Усть-Каменогорск'];

export default function SelectCity() {
  const [city, setCity] = useState(user.city);

  const onContinue = () => {
    user.city = city;
    if (router.canDismiss()) router.dismissAll();
    router.replace('/Home');
  };

  return (
    <Screen
      title="Выберите город"
      subtitle="Заведения которые будут показываться вам, будут зависеть от вашего города."
      footer={<ContinueButton disabled={!city} onPress={onContinue} />}
    >
      <CitySelect value={city} onChange={setCity} cities={CITIES} />
    </Screen>
  );
}
