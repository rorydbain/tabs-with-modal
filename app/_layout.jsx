import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="notifications"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
