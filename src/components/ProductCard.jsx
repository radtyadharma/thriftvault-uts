import { router } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { C, rupiah } from "../lib/products";

export function ProductCard({ product }) {
  return (
    <Pressable
      style={s.card}
      onPress={() => router.push(`/detail/${product.id}`)}
    >
      <Image source={{ uri: product.img }} style={s.img} contentFit="cover" />
      <Text style={s.title} numberOfLines={1}>
        {product.title}
      </Text>
      <Text style={s.price}>{rupiah(product.price)}</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  card: { width: "47.5%", gap: 8 },
  img: { width: "100%", height: 132, borderRadius: 12, backgroundColor: C.surface },
  title: { fontSize: 13, fontWeight: "500", color: C.text },
  price: { fontSize: 14, fontWeight: "600", color: C.primary },
});
