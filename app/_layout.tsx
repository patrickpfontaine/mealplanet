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
      backgroundColor: "#f3ede4",
    },
  };

  return <Stack screenOptions={defaultScreenOptions} />;
}
