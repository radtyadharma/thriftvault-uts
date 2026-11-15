import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Lucide from "@react-native-vector-icons/lucide";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const MENU = ["Pesanan Saya", "Favorit", "Alamat Tersimpan", "Pengaturan", "Keluar"];

const Profile = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Title Container */}
      <Text style={styles.brand}>Profil</Text>
      {/* End Title Container */}

      {/* User Container */}
      <View style={styles.userContainer}>
        <View style={styles.avatarContainer}>
          <Lucide name="user" size={30} color="#FFFAF5" />
        </View>
        <View style={styles.userGreet}>
          <Text style={styles.userName}>Raditya Dharma</Text>
          <Text style={styles.userEmail}>raditya@email.com</Text>
        </View>
      </View>
      {/* End User Container */}

      {/* Stats Container */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Pesanan</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>23</Text>
          <Text style={styles.statLabel}>Favorit</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>340</Text>
          <Text style={styles.statLabel}>Poin</Text>
        </View>
      </View>
      {/* End Stats Container */}

      {/* Menu Container */}
      <View style={styles.menuContainer}>
        {MENU.map((menu, index) => (
          <Pressable
            key={menu}
            style={styles.menuRow}
            onPress={() => {
              if (menu === "Keluar") {
                router.replace("/login");
              }
            }}
          >
            <Text
              style={[
                styles.menuText,
                index === MENU.length - 1 && styles.menuExit,
              ]}
            >
              {menu}
            </Text>
            <Lucide name="chevron-right" size={14} color="#E6E1D6" />
          </Pressable>
        ))}
      </View>
      {/* End Menu Container */}
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

  brand: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E1B18",
  },

  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#F4F0EA",
    borderRadius: 16,
    padding: 16,
  },

  avatarContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#D96B27",
    justifyContent: "center",
    alignItems: "center",
  },

  userGreet: {
    gap: 4,
  },

  userName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E1B18",
  },

  userEmail: {
    fontSize: 12,
    color: "#6B655C",
  },

  statsContainer: {
    flexDirection: "row",
    gap: 12,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#F4F0EA",
    borderRadius: 12,
    height: 72,
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },

  statNumber: {
    fontSize: 18,
    fontWeight: "700",
    color: "#D96B27",
  },

  statLabel: {
    fontSize: 11,
    color: "#6B655C",
  },

  menuContainer: {
    backgroundColor: "#FFFEFB",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E6E1D6",
    overflow: "hidden",
  },

  menuRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  menuText: {
    fontSize: 13,
    color: "#1E1B18",
  },

  menuExit: {
    color: "#D96B27",
    fontWeight: "700",
  },
});

export default Profile;
