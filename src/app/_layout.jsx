import React from "react";
import { Stack } from "expo-router";
import { CartProvider } from "../context/CartContext";

const Layout = () => {
  return (
    <CartProvider>
      <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#D96B27",
        },
        headerTintColor: "#FFFAF5",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="details" options={{ headerTitle: "Detail Produk" }} />
      <Stack.Screen name="checkout" options={{ headerTitle: "Checkout" }} />
      </Stack>
    </CartProvider>
  );
};

export default Layout;
