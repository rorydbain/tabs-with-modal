import { Button, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function Identifier() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>This is a specific notification {id}</Text>
      <Button title={"Go back"} onPress={() => router.back()} />
    </View>
  );
}
