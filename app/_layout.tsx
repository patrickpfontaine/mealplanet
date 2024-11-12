/*import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}*/


import { Stack } from "expo-router";

export default function RootLayout() {
  const defaultScreenOptions = {
    headerShown: false,
    contentStyle: {
      backgroundColor: "#f3ede4", // Global background style for content
    },
  };

  return (
    <Stack screenOptions={defaultScreenOptions}>
      <Stack.Screen name="SignIn" />
      <Stack.Screen name="SignUp" />
      <Stack.Screen name="CalendarPage" />
      <Stack.Screen name="GroupPage" />
      <Stack.Screen name="BCalendarPage" />
      {/* Add more screens here as your app grows */}
    </Stack>
  );
}

