import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/dinetimelogo.png";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2b2b2b" barStyle="light-content" />

      {/* Logo */}
      <View style={styles.imgs}>
        <Image source={logo} style={{ width: 300, height: 300 }} />
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        {/* Signup Button */}
        <TouchableOpacity
          style={styles.txt}
          onPress={() => router.push("/signup")}
        >
          <Text style={styles.t1}>Signup</Text>
        </TouchableOpacity>

        {/* Guest User Button */}
        <TouchableOpacity
          style={[styles.txt, styles.guestBtn]}
          onPress={() => router.push("/home")}
        >
          <Text style={styles.t1}>Guest User</Text>
        </TouchableOpacity>

        {/* Already have an account? Login */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Already have an account?{" "}
            <Text
              style={styles.loginLink}
              onPress={() => router.push("/login")}
            >
              Signupk
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b2b2b",
    alignItems: "center",
    justifyContent: "center",
  },

  imgs: {
    alignItems: "center",
    marginBottom: 20,
  },

  buttonsContainer: {
    width: "100%",
    alignItems: "center",
  },

  txt: {
    backgroundColor: "#f49b33",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 40,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  guestBtn: {
    backgroundColor: "white",
  },

  t1: {
    fontSize: 20,
    fontWeight: "700",
    color: "black",
    textAlign: "center",
  },

  loginContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  loginText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },

  loginLink: {
    color: "#f49b33", // blue color
    fontWeight: "700",
  },
});
