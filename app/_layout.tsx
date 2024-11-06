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
    headerShown: false, // You can adjust this based on your needs
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
      {/* Add more screens here as your app grows */}
    </Stack>
  );
}

