import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { C } from "../../lib/products";

const MENU = ["Pesanan Saya", "Favorit", "Alamat Tersimpan", "Pengaturan", "Keluar"];

export default function Profil() {
  return (
    <View style={s.screen}>
      <Text style={s.title}>Profil</Text>
      <View style={s.user}>
        <View style={s.avatar}>
          <Ionicons name="person" size={30} color="#FFFAF5" />
        </View>
        <View style={s.userInfo}>
          <Text style={s.name}>Raditya Dharma</Text>
          <Text style={s.email}>raditya@email.com</Text>
        </View>
      </View>
      <View style={s.stats}>
        {[["8", "Pesanan"], ["23", "Favorit"], ["340", "Poin"]].map(([n, l]) => (
          <View key={l} style={s.stat}>
            <Text style={s.statNum}>{n}</Text>
            <Text style={s.statLabel}>{l}</Text>
          </View>
        ))}
      </View>
      <View style={s.menu}>
        {MENU.map((m, j) => (
          <Pressable
            key={m}
            style={s.menuRow}
            onPress={() => {
              if (m === "Keluar") router.replace("/login");
            }}
          >
            <Text style={[s.menuText, j === 4 && { color: C.primary, fontWeight: "600" }]}>
              {m}
            </Text>
            <Ionicons name="chevron-forward" size={14} color={C.border} />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg, paddingTop: 20, paddingHorizontal: 24, gap: 16 },
  title: { fontSize: 22, fontWeight: "700", color: C.text },
  user: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: C.surface,
    borderRadius: 16,
    padding: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: C.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  userInfo: { gap: 4 },
  name: { fontSize: 16, fontWeight: "600", color: C.text },
  email: { fontSize: 12, color: C.sub },
  stats: { flexDirection: "row", gap: 12 },
  stat: {
    flex: 1,
    backgroundColor: C.surface,
    borderRadius: 12,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  statNum: { fontSize: 18, fontWeight: "700", color: C.primary },
  statLabel: { fontSize: 11, color: C.sub },
  menu: {
    backgroundColor: "#FFFEFB",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: C.border,
    overflow: "hidden",
  },
  menuRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  menuText: { fontSize: 13, color: C.text },
});
