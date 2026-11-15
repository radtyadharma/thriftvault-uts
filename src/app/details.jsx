import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useCart } from "../context/CartContext";
import { PRODUCTS, rupiah } from "../data/products";

const SIZES = ["S", "M", "L", "XL"];

const Details = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { addItem } = useCart();
  const [size, setSize] = useState("M");
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>Produk tidak ditemukan.</Text>
      </View>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    router.push("/(tabs)/keranjang");
  };

  const handleBuyNow = () => {
    addItem(product);
    router.push("/checkout");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Product Image Container */}
        <Image source={{ uri: product.img }} style={styles.productImage} />
        {/* End Product Image Container */}

        {/* Product Info Container */}
        <View style={styles.infoContainer}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>{rupiah(product.price)}</Text>
          <View style={styles.metaRow}>
            <Text
              style={[
                styles.conditionBadge,
                product.condition === "Like New" && styles.conditionLikeNew,
              ]}
            >
              {product.condition}
            </Text>
            <Text style={styles.soldText}>Terjual 12</Text>
          </View>
        </View>
        {/* End Product Info Container */}

        {/* Size Container */}
        <View style={styles.sizeContainer}>
          <Text style={styles.sectionTitle}>Ukuran</Text>
          <View style={styles.sizeRow}>
            {SIZES.map((s) => (
              <Pressable
                key={s}
                style={[styles.sizeChip, size === s && styles.sizeActive]}
                onPress={() => setSize(s)}
              >
                <Text
                  style={[
                    styles.sizeText,
                    size === s && styles.sizeTextActive,
                  ]}
                >
                  {s}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
        {/* End Size Container */}

        {/* Description Container */}
        <View style={styles.descContainer}>
          <Text style={styles.sectionTitle}>Deskripsi</Text>
          <Text style={styles.descText}>{product.desc}</Text>
        </View>
        {/* End Description Container */}
      </ScrollView>

      {/* Action Container */}
      <View style={styles.actionContainer}>
        <Pressable style={styles.secondaryButton} onPress={handleAddToCart}>
          <Text style={styles.secondaryButtonText}>+ Keranjang</Text>
        </Pressable>
        <Pressable style={styles.primaryButton} onPress={handleBuyNow}>
          <Text style={styles.primaryButtonText}>Beli Sekarang</Text>
        </Pressable>
      </View>
      {/* End Action Container */}
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
    gap: 16,
    paddingBottom: 40,
  },

  emptyText: {
    fontSize: 13,
    color: "#6B655C",
  },

  productImage: {
    width: "100%",
    height: 260,
    borderRadius: 16,
    backgroundColor: "#F4F0EA",
  },

  infoContainer: {
    gap: 8,
  },

  productTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E1B18",
  },

  productPrice: {
    fontSize: 20,
    fontWeight: "700",
    color: "#D96B27",
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  conditionBadge: {
    fontSize: 10,
    fontWeight: "700",
    color: "#6B655C",
    backgroundColor: "#F4F0EA",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    overflow: "hidden",
  },

  conditionLikeNew: {
    color: "#1F7A4C",
    backgroundColor: "#E5F1EB",
  },

  soldText: {
    fontSize: 12,
    color: "#6B655C",
  },

  sizeContainer: {
    gap: 10,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E1B18",
  },

  sizeRow: {
    flexDirection: "row",
    gap: 8,
  },

  sizeChip: {
    width: 56,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#F4F0EA",
    justifyContent: "center",
    alignItems: "center",
  },

  sizeActive: {
    backgroundColor: "#D96B27",
  },

  sizeText: {
    fontSize: 13,
    color: "#1E1B18",
  },

  sizeTextActive: {
    color: "#FFFAF5",
    fontWeight: "700",
  },

  descContainer: {
    gap: 10,
  },

  descText: {
    fontSize: 13,
    color: "#6B655C",
    lineHeight: 20,
  },

  actionContainer: {
    flexDirection: "row",
    gap: 12,
    padding: 24,
    paddingTop: 12,
  },

  primaryButton: {
    flex: 1,
    backgroundColor: "#D96B27",
    borderRadius: 12,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#FFFAF5",
    fontSize: 14,
    fontWeight: "700",
  },

  secondaryButton: {
    flex: 1,
    backgroundColor: "#F4F0EA",
    borderWidth: 1,
    borderColor: "#D96B27",
    borderRadius: 12,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
  },

  secondaryButtonText: {
    color: "#D96B27",
    fontSize: 14,
    fontWeight: "700",
  },
});

export default Details;
