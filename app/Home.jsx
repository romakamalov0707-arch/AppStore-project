import { router } from 'expo-router';
import Screen from '../components/Screen';
import ProfileButton from '../components/ProfileButton';
import VenueCard from '../components/VenueCard';
import { user } from '../utils/user';
import { VENUES } from '../utils/venues';

export default function Home() {
  const city = user.city;

  return (
    <Screen
      showBack={false}
      headerRight={<ProfileButton />}
      title="Заведения"
      subtitle={city ? `Ваш город: ${city}` : 'Город не выбран — укажите его в профиле'}
    >
      {VENUES.map((venue) => (
        <VenueCard
          key={venue.id}
          venue={venue}
          onPress={() => router.push({ pathname: '/Venue', params: { id: venue.id } })}
        />
      ))}
    </Screen>
  );
}
