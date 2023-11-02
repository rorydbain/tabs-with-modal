import { Button, View } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View>
      <Button
        title={"Open notification list modal"}
        onPress={() => router.push("/notifications")}
      />
      <Button
        title={"Open notification 1 modal"}
        onPress={() => router.push("/notifications/1")}
      />
    </View>
  );
}
