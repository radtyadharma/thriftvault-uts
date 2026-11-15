import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.inner}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Title Container */}
        <View style={styles.titleContainer}>
          <Text style={styles.brand}>Buat Akun</Text>
        </View>
        {/* End Title Container */}

        {/* Form Container */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nama Lengkap"
            placeholderTextColor="#6B655C"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#6B655C"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Kata Sandi"
            placeholderTextColor="#6B655C"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Pressable style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Daftar</Text>
          </Pressable>
        </View>
        {/* End Form Container */}

        {/* Footer Container */}
        <View style={styles.footerContainer}>
          <Text style={styles.subTitle}>Sudah punya akun? </Text>
          <Pressable onPress={() => router.replace("/login")}>
            <Text style={[styles.subTitle, styles.link]}>Masuk</Text>
          </Pressable>
        </View>
        {/* End Footer Container */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFBF7",
  },

  inner: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    gap: 40,
  },

  titleContainer: {
    alignItems: "center",
  },

  brand: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1E1B18",
  },

  subTitle: {
    fontSize: 14,
    color: "#6B655C",
  },

  formContainer: {
    gap: 14,
  },

  input: {
    backgroundColor: "#F4F0EA",
    borderWidth: 1,
    borderColor: "#E6E1D6",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
    fontSize: 14,
    color: "#1E1B18",
  },

  button: {
    backgroundColor: "#D96B27",
    borderRadius: 12,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFAF5",
    fontSize: 16,
    fontWeight: "700",
  },

  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  link: {
    color: "#D96B27",
    fontWeight: "700",
  },
});

export default Register;
