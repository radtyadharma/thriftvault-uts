import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { C } from "../../lib/products";

export default function Register() {
  const router = useRouter();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <KeyboardAvoidingView
      style={s.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={s.title}>Buat Akun</Text>
      <View style={s.form}>
        <TextInput
          style={s.input}
          placeholder="Nama Lengkap"
          placeholderTextColor={C.sub}
          value={nama}
          onChangeText={setNama}
        />
        <TextInput
          style={s.input}
          placeholder="Email"
          placeholderTextColor={C.sub}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={s.input}
          placeholder="Kata Sandi"
          placeholderTextColor={C.sub}
          value={pass}
          onChangeText={setPass}
          secureTextEntry
        />
        <Pressable style={s.btn} onPress={() => router.replace("/(tabs)")}>
          <Text style={s.btnText}>Daftar</Text>
        </Pressable>
        <View style={s.row}>
          <Text style={s.small}>Sudah punya akun? </Text>
          <Pressable onPress={() => router.replace("/login")}>
            <Text style={[s.small, { color: C.primary, fontWeight: "600" }]}>
              Masuk
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg, justifyContent: "center", padding: 24, gap: 40 },
  title: { fontSize: 30, fontWeight: "700", color: C.text, textAlign: "center" },
  form: { gap: 14 },
  input: {
    backgroundColor: C.surface,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
    fontSize: 14,
    color: C.text,
  },
  btn: {
    backgroundColor: C.primary,
    borderRadius: 12,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: { color: "#FFFAF5", fontSize: 16, fontWeight: "600" },
  row: { flexDirection: "row", justifyContent: "center", marginTop: 8 },
  small: { fontSize: 13, color: C.sub },
});
