import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="Home/index">
      <Stack.Screen
        name="Home/index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Help/index"
        options={{ title: "Help", headerStyle: { backgroundColor: "#e1ff00" } }}
      />
    </Stack>
  );
}
