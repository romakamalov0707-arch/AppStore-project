import type { ComponentProps } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export type IconName = ComponentProps<typeof Ionicons>['name'];

export type Venue = {
  id: string;
  name: string;
  category: string;
  icon: IconName;
  rating: number;
  address: string;
  hours: string;
  description: string;
};

export type Dish = {
  id: string;
  name: string;
  price: number;
};

export type CartItemData = Dish & {
  qty: number;
};

export type Order = {
  number: number;
  date: string;
  items: CartItemData[];
  total: number;
  address: string;
};

export type ButtonProps = {
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export type FieldProps = {
  value: string;
  onChange: (text: string) => void;
};
