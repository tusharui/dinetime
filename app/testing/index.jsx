import { Text, View } from "react-native";

const Testing = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "red", fontWeight: "bold", fontSize: 20 }}>
        Hello
      </Text>
    </View>
  );
};

export default Testing;
