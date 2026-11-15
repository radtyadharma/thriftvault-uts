import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Image } from "expo-image";
import { ProductCard } from "../../components/ProductCard";
import { C, PRODUCTS, rupiah } from "../../lib/products";

export default function Home() {
  return (
    <View style={s.screen}>
      <View style={s.header}>
        <View style={s.brandRow}>
          <Text style={s.brand}>ThriftVault</Text>
          <View style={s.dot} />
        </View>
        <View style={s.search}>
          <Ionicons name="search" size={16} color={C.sub} />
          <TextInput
            style={s.searchInput}
            placeholder="Cari jaket, sepatu, vintage..."
            placeholderTextColor={C.sub}
            onFocus={() => router.push("/(tabs)/explore")}
          />
        </View>
      </View>
      <View style={s.banner}>
        <Image source={{ uri: PRODUCTS[6].img }} style={s.bannerImg} />
        <View style={s.scrim} />
        <Text style={s.bannerText}>Koleksi Vintage Minggu Ini</Text>
      </View>
      <View style={s.sectionRow}>
        <Text style={s.section}>Produk Pilihan</Text>
        <Text style={s.link} onPress={() => router.push("/(tabs)/explore")}>
          Lihat Semua
        </Text>
      </View>
      <View style={s.grid}>
        {PRODUCTS.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg, paddingTop: 20, gap: 14 },
  header: { paddingHorizontal: 24, gap: 12 },
  brandRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  brand: { fontSize: 22, fontWeight: "700", color: C.text },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: C.primary },
  search: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: C.surface,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 44,
  },
  searchInput: { flex: 1, fontSize: 13, color: C.text },
  banner: { marginHorizontal: 24, borderRadius: 16, overflow: "hidden", height: 116 },
  bannerImg: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
  scrim: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(20,12,5,0.35)" },
  bannerText: {
    position: "absolute",
    left: 16,
    bottom: 12,
    color: "#FFFAF5",
    fontSize: 16,
    fontWeight: "600",
  },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  section: { fontSize: 17, fontWeight: "600", color: C.text },
  link: { fontSize: 12, fontWeight: "600", color: C.primary },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    paddingHorizontal: 24,
  },
});
