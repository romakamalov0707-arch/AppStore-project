import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Screen from '../components/Screen';
import InfoRow from '../components/InfoRow';
import BookButton from '../components/BookButton';
import { colors } from '../components/theme';
import { getVenue } from '../utils/venues';
import { notify } from '../utils/notify';

export default function Venue() {
  const { id } = useLocalSearchParams();
  const venue = getVenue(id);

  if (!venue) return <Screen title="Заведение не найдено" />;

  return (
    <Screen
      title={venue.name}
      subtitle={venue.category}
      footer={<BookButton onPress={() => notify(`Столик в «${venue.name}» забронирован!`)} />}
    >
      <InfoRow icon="star" label="Рейтинг" value={`${venue.rating} из 5`} />
      <InfoRow icon="location" label="Адрес" value={venue.address} />
      <InfoRow icon="time" label="Время работы" value={venue.hours} />

      <Text style={{ fontSize: 15, lineHeight: 22, color: colors.text, marginTop: 12 }}>{venue.description}</Text>
    </Screen>
  );
}
