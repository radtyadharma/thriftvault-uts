import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { PRODUCTS, rupiah } from "../../data/products";

const CATEGORIES = ["Semua", "Jaket", "Kaos", "Celana", "Sepatu", "Tas"];

const Explore = () => {
  const router = useRouter();
  const [category, setCategory] = useState("Semua");
  const [keyword, setKeyword] = useState("");

  const filtered = PRODUCTS.filter(
    (p) =>
      (category === "Semua" || p.category === category) &&
      p.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.productRow}
      onPress={() =>
        router.push({
          pathname: "/details",
          params: { id: item.id },
        })
      }
    >
      <Image source={{ uri: item.img }} style={styles.productThumb} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>{rupiah(item.price)}</Text>
        <Text
          style={[
            styles.productCondition,
            item.condition === "Like New" && styles.conditionLikeNew,
          ]}
        >
          {item.condition}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Title Container */}
      <Text style={styles.brand}>Explore</Text>
      {/* End Title Container */}

      {/* Search Container */}
      <TextInput
        style={styles.searchInput}
        placeholder="Cari barang second..."
        placeholderTextColor="#6B655C"
        value={keyword}
        onChangeText={setKeyword}
      />
      {/* End Search Container */}

      {/* Category Container */}
      <FlatList
        horizontal
        data={CATEGORIES}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.categoryChip, category === item && styles.chipActive]}
            onPress={() => setCategory(item)}
          >
            <Text
              style={[
                styles.chipText,
                category === item && styles.chipTextActive,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        )}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        style={styles.categoryList}
      />
      {/* End Category Container */}

      {/* Product List Container */}
      <FlatList
        data={filtered}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Tidak ada barang yang cocok.</Text>
        }
      />
      {/* End Product List Container */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFBF7",
    paddingHorizontal: 24,
    paddingTop: 20,
    gap: 14,
  },

  brand: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E1B18",
  },

  searchInput: {
    backgroundColor: "#F4F0EA",
    borderWidth: 1,
    borderColor: "#E6E1D6",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 44,
    fontSize: 13,
    color: "#1E1B18",
  },

  categoryList: {
    flexGrow: 0,
  },

  categoryChip: {
    backgroundColor: "#F4F0EA",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 8,
  },

  chipActive: {
    backgroundColor: "#D96B27",
  },

  chipText: {
    fontSize: 12,
    color: "#6B655C",
  },

  chipTextActive: {
    color: "#FFFAF5",
    fontWeight: "700",
  },

  list: {
    gap: 14,
    paddingBottom: 24,
  },

  productRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },

  productThumb: {
    width: 72,
    height: 72,
    borderRadius: 10,
    backgroundColor: "#F4F0EA",
  },

  productInfo: {
    flex: 1,
    gap: 5,
  },

  productTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1E1B18",
  },

  productPrice: {
    fontSize: 13,
    fontWeight: "700",
    color: "#D96B27",
  },

  productCondition: {
    alignSelf: "flex-start",
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

  emptyText: {
    fontSize: 13,
    color: "#6B655C",
    textAlign: "center",
    marginTop: 20,
  },
});

export default Explore;
