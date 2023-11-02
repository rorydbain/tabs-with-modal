import { Button, View } from "react-native";
import { router } from "expo-router";

export default function Settings() {
  return (
    <View>
      <Button
        title={"Open notification list modal"}
        onPress={() => router.push("/notifications")}
      />
    </View>
  );
}
