import { useLocalSearchParams, router, Stack } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useCart } from "../../lib/cart";
import { C, PRODUCTS, rupiah } from "../../lib/products";

const SIZES = ["S", "M", "L", "XL"];

export default function Detail() {
  const { id } = useLocalSearchParams();
  const { add } = useCart();
  const [size, setSize] = useState("M");
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <View style={[s.screen, { justifyContent: "center", alignItems: "center" }]}>
        <Text style={s.empty}>Produk tidak ditemukan.</Text>
      </View>
    );
  }

  return (
    <View style={s.screen}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        contentContainerStyle={s.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={s.topBar}>
          <Pressable onPress={() => router.back()}>
            <Text style={s.back}>{"<"}</Text>
          </Pressable>
          <Text style={s.topTitle}>Detail Produk</Text>
        </View>
        <Image source={{ uri: product.img }} style={s.img} contentFit="cover" />
        <Text style={s.title}>{product.title}</Text>
        <Text style={s.price}>{rupiah(product.price)}</Text>
        <View style={s.meta}>
          <Text style={[s.cond, product.condition === "Like New" && s.condLN]}>
            {product.condition}
          </Text>
          <Text style={s.sold}>Terjual 12</Text>
        </View>
        <Text style={s.label}>Ukuran</Text>
        <View style={s.sizes}>
          {SIZES.map((n) => (
            <Text
              key={n}
              style={[s.size, size === n && s.sizeActive]}
              onPress={() => setSize(n)}
            >
              {n}
            </Text>
          ))}
        </View>
        <Text style={s.label}>Deskripsi</Text>
        <Text style={s.desc}>{product.desc}</Text>
      </ScrollView>
      <View style={s.actions}>
        <Pressable
          style={s.btn2}
          onPress={() => {
            add(product);
            router.push("/(tabs)/keranjang");
          }}
        >
          <Text style={s.btn2Text}>+ Keranjang</Text>
        </Pressable>
        <Pressable
          style={s.btn1}
          onPress={() => {
            add(product);
            router.push("/checkout");
          }}
        >
          <Text style={s.btn1Text}>Beli Sekarang</Text>
        </Pressable>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg },
  content: { padding: 24, gap: 14, paddingBottom: 40 },
  topBar: { flexDirection: "row", alignItems: "center", gap: 12 },
  back: { fontSize: 24, fontWeight: "700", color: C.text },
  topTitle: { fontSize: 16, fontWeight: "600", color: C.text },
  img: { width: "100%", height: 260, borderRadius: 16, backgroundColor: C.surface },
  title: { fontSize: 20, fontWeight: "600", color: C.text },
  price: { fontSize: 20, fontWeight: "700", color: C.primary },
  meta: { flexDirection: "row", alignItems: "center", gap: 8 },
  cond: {
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
  sold: { fontSize: 12, color: C.sub },
  label: { fontSize: 14, fontWeight: "600", color: C.text },
  sizes: { flexDirection: "row", gap: 8 },
  size: {
    width: 56,
    height: 36,
    borderRadius: 10,
    backgroundColor: C.surface,
    textAlign: "center",
    lineHeight: 36,
    fontSize: 13,
    color: C.text,
    overflow: "hidden",
  },
  sizeActive: { backgroundColor: C.primary, color: "#FFFAF5", fontWeight: "600" },
  desc: { fontSize: 13, color: C.sub, lineHeight: 20 },
  actions: {
    flexDirection: "row",
    gap: 12,
    padding: 24,
    paddingTop: 12,
    backgroundColor: C.bg,
  },
  btn1: {
    flex: 1,
    backgroundColor: C.primary,
    borderRadius: 12,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  btn1Text: { color: "#FFFAF5", fontSize: 14, fontWeight: "600" },
  btn2: {
    flex: 1,
    backgroundColor: C.surface,
    borderWidth: 1,
    borderColor: C.primary,
    borderRadius: 12,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  btn2Text: { color: C.primary, fontSize: 14, fontWeight: "600" },
  empty: { fontSize: 13, color: C.sub },
});
