import { router, Stack } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { ONGKIR, useCart } from "../lib/cart";
import { C, rupiah } from "../lib/products";

const PAYS = ["Transfer Bank", "QRIS", "COD (Bayar di Tempat)"];

export default function Checkout() {
  const { items, total } = useCart();
  const [pay, setPay] = useState(PAYS[0]);

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
          <Text style={s.title}>Checkout</Text>
        </View>
        <Text style={s.label}>Alamat Pengiriman</Text>
        <View style={s.card}>
          <Text style={s.addrName}>Raditya Dharma - 08873027864</Text>
          <Text style={s.addr}>
            Jl. Tukad Pakerisan No. 12, Denpasar, Bali 80237
          </Text>
        </View>
        <Text style={s.label}>Metode Pembayaran</Text>
        {PAYS.map((p) => (
          <Pressable
            key={p}
            style={[s.pay, pay === p && s.payActive]}
            onPress={() => setPay(p)}
          >
            <View style={[s.radio, pay === p && s.radioActive]} />
            <Text style={[s.payText, pay === p && { fontWeight: "600" }]}>
              {p}
            </Text>
          </Pressable>
        ))}
        <View style={s.summary}>
          <View style={s.sumRow}>
            <Text style={s.sumLabel}>Subtotal + Ongkir</Text>
            <Text style={s.sumVal}>{rupiah(total + ONGKIR)}</Text>
          </View>
          <View style={s.sumRow}>
            <Text style={s.sumTotal}>Total Pembayaran</Text>
            <Text style={s.sumPrice}>{rupiah(total + ONGKIR)}</Text>
          </View>
        </View>
      </ScrollView>
      <Pressable
        style={s.btn}
        disabled={items.length === 0}
        onPress={() =>
          Alert.alert(
            "Pembayaran Berhasil",
            `Pembayaran ${rupiah(total + ONGKIR)} via ${pay} berhasil diproses.`
          )
        }
      >
        <Text style={s.btnText}>Bayar Sekarang</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg },
  content: { padding: 24, gap: 14, paddingBottom: 40 },
  topBar: { flexDirection: "row", alignItems: "center", gap: 12 },
  back: { fontSize: 24, fontWeight: "700", color: C.text },
  title: { fontSize: 22, fontWeight: "700", color: C.text },
  label: { fontSize: 14, fontWeight: "600", color: C.text },
  card: {
    backgroundColor: C.surface,
    borderRadius: 12,
    padding: 16,
    gap: 6,
  },
  addrName: { fontSize: 13, fontWeight: "600", color: C.text },
  addr: { fontSize: 12, color: C.sub, lineHeight: 18 },
  pay: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#FFFEFB",
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  payActive: { borderColor: C.primary, borderWidth: 2, backgroundColor: C.surface },
  radio: { width: 16, height: 16, borderRadius: 8, backgroundColor: C.border },
  radioActive: { backgroundColor: C.primary },
  payText: { fontSize: 13, color: C.text },
  summary: {
    backgroundColor: C.surface,
    borderRadius: 12,
    padding: 16,
    gap: 8,
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
    margin: 24,
    marginTop: 12,
  },
  btnText: { color: "#FFFAF5", fontSize: 15, fontWeight: "600" },
});
