import { router, Stack } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Notification() {
  return (
    <View>
      <Stack.Screen
        options={{
          presentation: "modal",
        }}
      />
      <Text>This is a modal in app/notifications/index.js</Text>
      <Button title={"Go back"} onPress={() => router.back()} />
      {Array.from({ length: 10 }).map((_, i) => (
        <Button
          key={i}
          title={"Open notification " + i}
          onPress={() => router.push("/notifications/" + i)}
        />
      ))}
    </View>
  );
}
