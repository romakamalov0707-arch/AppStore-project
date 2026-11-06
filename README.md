# AppStor

Мобильное приложение на **React Native (Expo) + TypeScript**: вход, регистрация, восстановление пароля, выбор города и список заведений.

Работает на Android, iOS и в браузере.

## Возможности

- Вход по номеру телефона и паролю
- Регистрация с согласием на условия использования
- Восстановление пароля: номер телефона → код из СМС → новый пароль
- Выбор города
- Список заведений и страница каждого заведения
- Профиль пользователя со сменой города и выходом

## Технологии

- [Expo](https://expo.dev) SDK 57
- React Native 0.86
- TypeScript
- [Expo Router](https://docs.expo.dev/router/introduction/) — навигация между страницами
- `@expo/vector-icons` — иконки

## Запуск

1. Установить [Node.js](https://nodejs.org) (версия LTS).
2. Скачать проект:
   ```bash
   git clone https://github.com/romakamalov0707-arch/AppStore-project.git
   cd AppStore-project
   ```
3. Установить зависимости:
   ```bash
   npm install
   ```
4. Запустить:
   ```bash
   npx expo start
   ```
   - `w` — открыть в браузере
   - QR-код — открыть на телефоне через приложение **Expo Go**
   - `a` — открыть в Android-эмуляторе (нужен Android Studio)

## Структура проекта

```
app/            страницы (каждый файл — отдельная страница)
components/     элементы интерфейса (каждый элемент — отдельный файл)
utils/          вспомогательные функции и данные
assets/         иконки приложения
```

### Страницы (`app/`)

| Файл | Страница |
|---|---|
| `Login.tsx` | Вход |
| `Register.tsx` | Регистрация |
| `SelectCity.tsx` | Выбор города |
| `ForgotPassword.tsx` | Восстановление пароля |
| `VerifyCode.tsx` | Подтверждение номера (код из СМС) |
| `ResetPassword.tsx` | Новый пароль |
| `Home.tsx` | Список заведений |
| `Venue.tsx` | Страница заведения |
| `Profile.tsx` | Профиль |

### Элементы (`components/`)

| Группа | Файлы |
|---|---|
| Поля ввода | `Input`, `PhoneInput`, `PasswordInput`, `NameInput`, `CodeInput`, `CitySelect` |
| Кнопки | `PrimaryButton`, `ContinueButton`, `LoginButton`, `RegisterButton`, `BookButton`, `LogoutButton`, `BackButton`, `ProfileButton` |
| Текст | `ScreenTitle`, `ErrorText`, `TextLink`, `ResendCodeLink` |
| Другое | `Screen`, `TermsCheckbox`, `VenueCard`, `InfoRow`, `theme.ts` |

### Вспомогательные файлы (`utils/`)

| Файл | Что делает |
|---|---|
| `phone.ts` | Формат номера `+7 (700) 555 77 55` и проверка, что номер введён полностью |
| `password.ts` | Проверка пароля: не менее 8 символов, прописные и строчные буквы |
| `user.ts` | Данные текущего пользователя (имя, телефон, город) |
| `venues.ts` | Список заведений |
| `notify.ts` | Всплывающее сообщение |

## Навигация

```
Login ──► Home ──► Venue
  │         └────► Profile ──► SelectCity
  ├──► Register ──► SelectCity ──► Home
  └──► ForgotPassword ──► VerifyCode ──► ResetPassword ──► Login
```

## Примечание

Сервера нет. Данные пользователя хранятся только в памяти и сбрасываются при перезапуске. Список заведений — демонстрационный.
