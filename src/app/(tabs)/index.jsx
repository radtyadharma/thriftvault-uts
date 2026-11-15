import React from "react";
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

const Index = () => {
  const router = useRouter();

  const renderProduct = ({ item }) => (
    <Pressable
      style={styles.productCard}
      onPress={() =>
        router.push({
          pathname: "/details",
          params: { id: item.id },
        })
      }
    >
      <Image source={{ uri: item.img }} style={styles.productImage} />
      <Text style={styles.productTitle} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.productPrice}>{rupiah(item.price)}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Container */}
      <View style={styles.headerContainer}>
        <View style={styles.brandRow}>
          <Text style={styles.brand}>ThriftVault</Text>
          <View style={styles.brandDot}></View>
        </View>
      </View>
      {/* End Header Container */}

      {/* Search Container */}
      <Pressable
        style={styles.searchContainer}
        onPress={() => router.push("/(tabs)/explore")}
      >
        <Text style={styles.searchPlaceholder}>
          Cari jaket, sepatu, vintage...
        </Text>
      </Pressable>
      {/* End Search Container */}

      {/* Banner Container */}
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: PRODUCTS[6].img }}
          style={styles.bannerImage}
        />
        <View style={styles.bannerOverlay}></View>
        <Text style={styles.bannerText}>Koleksi Vintage Minggu Ini</Text>
      </View>
      {/* End Banner Container */}

      {/* Product List Container */}
      <View style={styles.listHeader}>
        <Text style={styles.sectionTitle}>Produk Pilihan</Text>
        <Pressable onPress={() => router.push("/(tabs)/explore")}>
          <Text style={styles.sectionLink}>Lihat Semua</Text>
        </Pressable>
      </View>
      <FlatList
        data={PRODUCTS.slice(0, 4)}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.gridRow}
        contentContainerStyle={styles.grid}
        scrollEnabled={false}
      />
      {/* End Product List Container */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFBF7",
    padding: 24,
    gap: 16,
  },

  headerContainer: {
    gap: 12,
  },

  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  brand: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E1B18",
  },

  brandDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#D96B27",
  },

  searchContainer: {
    backgroundColor: "#F4F0EA",
    borderWidth: 1,
    borderColor: "#E6E1D6",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 44,
    justifyContent: "center",
  },

  searchPlaceholder: {
    fontSize: 13,
    color: "#6B655C",
  },

  bannerContainer: {
    height: 116,
    borderRadius: 16,
    overflow: "hidden",
  },

  bannerImage: {
    width: "100%",
    height: "100%",
  },

  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(20, 12, 5, 0.35)",
  },

  bannerText: {
    position: "absolute",
    left: 16,
    bottom: 12,
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFAF5",
  },

  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1E1B18",
  },

  sectionLink: {
    fontSize: 12,
    fontWeight: "700",
    color: "#D96B27",
  },

  grid: {
    gap: 12,
  },

  gridRow: {
    gap: 12,
  },

  productCard: {
    width: "48.5%",
    gap: 8,
  },

  productImage: {
    width: "100%",
    height: 132,
    borderRadius: 12,
    backgroundColor: "#F4F0EA",
  },

  productTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1E1B18",
  },

  productPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#D96B27",
  },
});

export default Index;
