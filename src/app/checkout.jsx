import React, { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { useCart } from "../context/CartContext";
import { rupiah } from "../data/products";

const PAYMENTS = ["Transfer Bank", "QRIS", "COD (Bayar di Tempat)"];
const ONGKIR = 15000;

const Checkout = () => {
  const router = useRouter();
  const { items, total } = useCart();
  const [payment, setPayment] = useState(PAYMENTS[0]);

  const handlePay = () => {
    Alert.alert(
      "Pembayaran Berhasil",
      `Pembayaran ${rupiah(total + ONGKIR)} via ${payment} berhasil diproses.`
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Address Container */}
        <Text style={styles.sectionTitle}>Alamat Pengiriman</Text>
        <View style={styles.addressCard}>
          <Text style={styles.addressName}>Raditya Dharma - 08873027864</Text>
          <Text style={styles.addressDetail}>
            Jl. Tukad Pakerisan No. 12, Denpasar, Bali 80237
          </Text>
        </View>
        {/* End Address Container */}

        {/* Payment Container */}
        <Text style={styles.sectionTitle}>Metode Pembayaran</Text>
        {PAYMENTS.map((pay) => (
          <Pressable
            key={pay}
            style={[styles.paymentRow, payment === pay && styles.paymentActive]}
            onPress={() => setPayment(pay)}
          >
            <View
              style={[styles.radio, payment === pay && styles.radioActive]}
            ></View>
            <Text style={styles.paymentText}>{pay}</Text>
          </Pressable>
        ))}
        {/* End Payment Container */}

        {/* Summary Container */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              Subtotal ({items.length} barang) + Ongkir
            </Text>
            <Text style={styles.summaryValue}>{rupiah(total + ONGKIR)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryTotal}>Total Pembayaran</Text>
            <Text style={styles.summaryPrice}>{rupiah(total + ONGKIR)}</Text>
          </View>
        </View>
        {/* End Summary Container */}

        {/* Back Container */}
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Kembali ke Keranjang</Text>
        </Pressable>
        {/* End Back Container */}
      </ScrollView>

      {/* Pay Button Container */}
      <Pressable
        style={[styles.payButton, items.length === 0 && styles.buttonDisabled]}
        disabled={items.length === 0}
        onPress={handlePay}
      >
        <Text style={styles.payButtonText}>Bayar Sekarang</Text>
      </Pressable>
      {/* End Pay Button Container */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFBF7",
  },

  content: {
    padding: 24,
    gap: 14,
    paddingBottom: 40,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E1B18",
  },

  addressCard: {
    backgroundColor: "#F4F0EA",
    borderRadius: 12,
    padding: 16,
    gap: 6,
  },

  addressName: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E1B18",
  },

  addressDetail: {
    fontSize: 12,
    color: "#6B655C",
    lineHeight: 18,
  },

  paymentRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#FFFEFB",
    borderWidth: 1,
    borderColor: "#E6E1D6",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  paymentActive: {
    borderWidth: 2,
    borderColor: "#D96B27",
    backgroundColor: "#F4F0EA",
  },

  radio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#E6E1D6",
  },

  radioActive: {
    backgroundColor: "#D96B27",
  },

  paymentText: {
    fontSize: 13,
    color: "#1E1B18",
  },

  summaryContainer: {
    backgroundColor: "#F4F0EA",
    borderRadius: 12,
    padding: 16,
    gap: 8,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  summaryLabel: {
    fontSize: 13,
    color: "#6B655C",
  },

  summaryValue: {
    fontSize: 13,
    color: "#1E1B18",
  },

  summaryTotal: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1E1B18",
  },

  summaryPrice: {
    fontSize: 15,
    fontWeight: "700",
    color: "#D96B27",
  },

  backButton: {
    alignSelf: "flex-start",
  },

  backButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#D96B27",
  },

  payButton: {
    backgroundColor: "#D96B27",
    borderRadius: 12,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    margin: 24,
    marginTop: 12,
  },

  buttonDisabled: {
    opacity: 0.4,
  },

  payButtonText: {
    color: "#FFFAF5",
    fontSize: 15,
    fontWeight: "700",
  },
});

export default Checkout;
