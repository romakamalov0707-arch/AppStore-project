import { useCallback, useState } from 'react';
import { View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import Screen from '../components/Screen';
import CartButton from '../components/CartButton';
import ProfileButton from '../components/ProfileButton';
import VenueCard from '../components/VenueCard';
import { user } from '../utils/user';
import { getCount } from '../utils/cart';
import { VENUES } from '../utils/venues';

export default function Home() {
  const city = user.city;
  const [cartCount, setCartCount] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setCartCount(getCount());
    }, [])
  );

  return (
    <Screen
      showBack={false}
      headerRight={
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <CartButton count={cartCount} />
          <ProfileButton />
        </View>
      }
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
