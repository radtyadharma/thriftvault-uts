import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Image } from "expo-image";
import { C, PRODUCTS, rupiah } from "../../lib/products";

const CHIPS = ["Semua", "Jaket", "Kaos", "Celana", "Sepatu", "Tas"];

export default function Explore() {
  const [chip, setChip] = useState("Semua");
  const [q, setQ] = useState("");
  const filtered = PRODUCTS.filter(
    (p) =>
      (chip === "Semua" || p.title.toLowerCase().includes(chip.toLowerCase())) &&
      p.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <View style={s.screen}>
      <Text style={s.title}>Explore</Text>
      <View style={s.search}>
        <Ionicons name="search" size={16} color={C.sub} />
        <TextInput
          style={s.searchInput}
          placeholder="Cari barang second..."
          placeholderTextColor={C.sub}
          value={q}
          onChangeText={setQ}
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.chips}
      >
        {CHIPS.map((n) => (
          <Text
            key={n}
            style={[s.chip, chip === n && s.chipActive]}
            onPress={() => setChip(n)}
          >
            {n}
          </Text>
        ))}
      </ScrollView>
      <ScrollView
        contentContainerStyle={s.list}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{ uri: PRODUCTS[7].img }}
          style={s.banner}
          contentFit="cover"
        />
        {filtered.map((p) => (
          <View key={p.id} style={s.row}>
            <Image source={{ uri: p.img }} style={s.thumb} contentFit="cover" />
            <View style={s.info}>
              <Text style={s.rowTitle}>{p.title}</Text>
              <Text style={s.price}>{rupiah(p.price)}</Text>
              <Text style={[s.cond, p.condition === "Like New" && s.condLN]}>
                {p.condition}
              </Text>
            </View>
          </View>
        ))}
        {filtered.length === 0 && (
          <Text style={s.empty}>Tidak ada barang yang cocok.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg, paddingTop: 20, gap: 14 },
  title: { fontSize: 22, fontWeight: "700", color: C.text, paddingHorizontal: 24 },
  search: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginHorizontal: 24,
    backgroundColor: C.surface,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 44,
  },
  searchInput: { flex: 1, fontSize: 13, color: C.text },
  chips: { gap: 8, paddingHorizontal: 24 },
  chip: {
    fontSize: 12,
    color: C.sub,
    backgroundColor: C.surface,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    overflow: "hidden",
  },
  chipActive: { backgroundColor: C.primary, color: "#FFFAF5", fontWeight: "600" },
  list: { gap: 14, paddingHorizontal: 24, paddingBottom: 24 },
  banner: { width: "100%", height: 100, borderRadius: 16 },
  row: { flexDirection: "row", gap: 12, alignItems: "center" },
  thumb: { width: 72, height: 72, borderRadius: 10 },
  info: { gap: 5, flex: 1 },
  rowTitle: { fontSize: 13, fontWeight: "500", color: C.text },
  price: { fontSize: 13, fontWeight: "600", color: C.primary },
  cond: {
    alignSelf: "flex-start",
    fontSize: 10,
    fontWeight: "600",
    color: C.sub,
    backgroundColor: C.surface,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    overflow: "hidden",
  },
  condLN: { color: C.success, backgroundColor: "#E5F1EB" },
  empty: { fontSize: 13, color: C.sub, textAlign: "center", marginTop: 20 },
});
