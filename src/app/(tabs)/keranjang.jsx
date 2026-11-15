import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "../../context/CartContext";
import { rupiah } from "../../data/products";

const ONGKIR = 15000;

const Keranjang = () => {
  const router = useRouter();
  const { items, addItem, removeItem, total } = useCart();

  return (
    <SafeAreaView style={styles.container}>
      {/* Title Container */}
      <Text style={styles.brand}>Keranjang</Text>
      {/* End Title Container */}

      {/* Cart List Container */}
      {items.length === 0 ? (
        <Text style={styles.emptyText}>
          Keranjang kosong. Yuk mulai belanja.
        </Text>
      ) : (
        <View style={styles.cartList}>
          {items.map((i) => (
            <View key={i.product.id} style={styles.cartRow}>
              <Image
                source={{ uri: i.product.img }}
                style={styles.cartThumb}
              />
              <View style={styles.cartInfo}>
                <Text style={styles.cartTitle}>{i.product.title}</Text>
                <Text style={styles.cartPrice}>{rupiah(i.product.price)}</Text>
                <View style={styles.qtyRow}>
                  <Pressable onPress={() => removeItem(i.product.id)}>
                    <Text style={styles.qtyButton}>-</Text>
                  </Pressable>
                  <Text style={styles.qtyValue}>{i.qty}</Text>
                  <Pressable onPress={() => addItem(i.product)}>
                    <Text style={[styles.qtyButton, styles.qtyAdd]}>+</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}
      {/* End Cart List Container */}

      {/* Summary Container */}
      {items.length > 0 && (
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>{rupiah(total)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Ongkir</Text>
            <Text style={styles.summaryValue}>{rupiah(ONGKIR)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryTotal}>Total</Text>
            <Text style={styles.summaryPrice}>{rupiah(total + ONGKIR)}</Text>
          </View>
        </View>
      )}
      {/* End Summary Container */}

      {/* Checkout Button Container */}
      <Pressable
        style={[styles.checkoutButton, items.length === 0 && styles.buttonDisabled]}
        disabled={items.length === 0}
        onPress={() => router.push("/checkout")}
      >
        <Text style={styles.checkoutButtonText}>Lanjut ke Checkout</Text>
      </Pressable>
      {/* End Checkout Button Container */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFBF7",
    padding: 24,
    gap: 14,
  },

  brand: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E1B18",
  },

  emptyText: {
    fontSize: 13,
    color: "#6B655C",
    marginTop: 20,
  },

  cartList: {
    gap: 14,
  },

  cartRow: {
    flexDirection: "row",
    gap: 12,
  },

  cartThumb: {
    width: 64,
    height: 64,
    borderRadius: 10,
    backgroundColor: "#F4F0EA",
  },

  cartInfo: {
    flex: 1,
    gap: 6,
  },

  cartTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1E1B18",
  },

  cartPrice: {
    fontSize: 13,
    fontWeight: "700",
    color: "#D96B27",
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  qtyButton: {
    fontSize: 18,
    fontWeight: "700",
    color: "#6B655C",
    width: 20,
    textAlign: "center",
  },

  qtyAdd: {
    color: "#D96B27",
  },

  qtyValue: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1E1B18",
  },

  summaryContainer: {
    backgroundColor: "#F4F0EA",
    borderRadius: 12,
    padding: 16,
    gap: 8,
    marginTop: 4,
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

  checkoutButton: {
    backgroundColor: "#D96B27",
    borderRadius: 12,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 16,
  },

  buttonDisabled: {
    opacity: 0.4,
  },

  checkoutButtonText: {
    color: "#FFFAF5",
    fontSize: 15,
    fontWeight: "700",
  },
});

export default Keranjang;
