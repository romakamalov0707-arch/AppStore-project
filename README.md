# AppStor

Мобильное приложение на **React Native (Expo)**: вход, регистрация, восстановление пароля, выбор города и список заведений.

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
| `Login.jsx` | Вход |
| `Register.jsx` | Регистрация |
| `SelectCity.jsx` | Выбор города |
| `ForgotPassword.jsx` | Восстановление пароля |
| `VerifyCode.jsx` | Подтверждение номера (код из СМС) |
| `ResetPassword.jsx` | Новый пароль |
| `Home.jsx` | Список заведений |
| `Venue.jsx` | Страница заведения |
| `Profile.jsx` | Профиль |

### Элементы (`components/`)

| Группа | Файлы |
|---|---|
| Поля ввода | `Input`, `PhoneInput`, `PasswordInput`, `NameInput`, `CodeInput`, `CitySelect` |
| Кнопки | `PrimaryButton`, `ContinueButton`, `LoginButton`, `RegisterButton`, `BookButton`, `LogoutButton`, `BackButton`, `ProfileButton` |
| Текст | `ScreenTitle`, `ErrorText`, `TextLink`, `ResendCodeLink` |
| Другое | `Screen`, `TermsCheckbox`, `VenueCard`, `InfoRow`, `theme.js` |

### Вспомогательные файлы (`utils/`)

| Файл | Что делает |
|---|---|
| `phone.js` | Формат номера `+7 (700) 555 77 55` и проверка, что номер введён полностью |
| `password.js` | Проверка пароля: не менее 8 символов, прописные и строчные буквы |
| `user.js` | Данные текущего пользователя (имя, телефон, город) |
| `venues.js` | Список заведений |
| `notify.js` | Всплывающее сообщение |

## Навигация

```
Login ──► Home ──► Venue
  │         └────► Profile ──► SelectCity
  ├──► Register ──► SelectCity ──► Home
  └──► ForgotPassword ──► VerifyCode ──► ResetPassword ──► Login
```

## Примечание

Сервера нет. Данные пользователя хранятся только в памяти и сбрасываются при перезапуске. Список заведений — демонстрационный.
