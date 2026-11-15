import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { ONGKIR, useCart } from "../../lib/cart";
import { C, rupiah } from "../../lib/products";

export default function Keranjang() {
  const { items, add, remove, total } = useCart();

  return (
    <View style={s.screen}>
      <Text style={s.title}>Keranjang</Text>
      {items.length === 0 ? (
        <Text style={s.empty}>Keranjang kosong. Yuk mulai belanja.</Text>
      ) : (
        <>
          <View style={s.list}>
            {items.map((i) => (
              <View key={i.product.id} style={s.row}>
                <Image
                  source={{ uri: i.product.img }}
                  style={s.thumb}
                  contentFit="cover"
                />
                <View style={s.info}>
                  <Text style={s.rowTitle}>{i.product.title}</Text>
                  <Text style={s.price}>{rupiah(i.product.price)}</Text>
                  <View style={s.qty}>
                    <Text style={s.qtyBtn} onPress={() => remove(i.product.id)}>
                      −
                    </Text>
                    <Text style={s.qtyNum}>{i.qty}</Text>
                    <Text
                      style={[s.qtyBtn, { color: C.primary }]}
                      onPress={() => add(i.product)}
                    >
                      +
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
          <View style={s.summary}>
            <View style={s.sumRow}>
              <Text style={s.sumLabel}>Subtotal</Text>
              <Text style={s.sumVal}>{rupiah(total)}</Text>
            </View>
            <View style={s.sumRow}>
              <Text style={s.sumLabel}>Ongkir</Text>
              <Text style={s.sumVal}>{rupiah(ONGKIR)}</Text>
            </View>
            <View style={s.sumRow}>
              <Text style={s.sumTotal}>Total</Text>
              <Text style={s.sumPrice}>{rupiah(total + ONGKIR)}</Text>
            </View>
          </View>
        </>
      )}
      <Pressable
        style={[s.btn, items.length === 0 && { opacity: 0.4 }]}
        disabled={items.length === 0}
        onPress={() => router.push("/checkout")}
      >
        <Text style={s.btnText}>Lanjut ke Checkout</Text>
      </Pressable>
      <View style={s.tabPad} />
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg, paddingTop: 20, paddingHorizontal: 24, gap: 14 },
  title: { fontSize: 22, fontWeight: "700", color: C.text },
  empty: { fontSize: 13, color: C.sub, marginTop: 20 },
  list: { gap: 14 },
  row: { flexDirection: "row", gap: 12 },
  thumb: { width: 64, height: 64, borderRadius: 10 },
  info: { flex: 1, gap: 6 },
  rowTitle: { fontSize: 13, fontWeight: "500", color: C.text },
  price: { fontSize: 13, fontWeight: "600", color: C.primary },
  qty: { flexDirection: "row", alignItems: "center", gap: 14 },
  qtyBtn: { fontSize: 18, fontWeight: "700", color: C.sub, width: 20, textAlign: "center" },
  qtyNum: { fontSize: 13, fontWeight: "600", color: C.text },
  summary: {
    backgroundColor: C.surface,
    borderRadius: 12,
    padding: 16,
    gap: 8,
    marginTop: 4,
  },
  sumRow: { flexDirection: "row", justifyContent: "space-between" },
  sumLabel: { fontSize: 13, color: C.sub },
  sumVal: { fontSize: 13, color: C.text },
  sumTotal: { fontSize: 15, fontWeight: "600", color: C.text },
  sumPrice: { fontSize: 15, fontWeight: "700", color: C.primary },
  btn: {
    backgroundColor: C.primary,
    borderRadius: 12,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: 16,
  },
  btnText: { color: "#FFFAF5", fontSize: 15, fontWeight: "600" },
  tabPad: { height: 0 },
});
