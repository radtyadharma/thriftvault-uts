import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { CartProvider } from "../lib/cart";

export default function RootLayout() {
  return (
    <CartProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="detail/[id]" />
        <Stack.Screen name="checkout" />
      </Stack>
    </CartProvider>
  );
}
