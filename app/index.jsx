import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black", // ✅ use a valid color
      }}
    >
      <Text style={{ color: "red" }}>
        Edit app/index.tsx to edit this screen.
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/testing")}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "white",
          borderRadius: 5,
        }}
      >
        <Text >Change route</Text>
      </TouchableOpacity>
    </View>
  );
}
