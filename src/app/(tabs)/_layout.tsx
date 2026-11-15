import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { C } from "../../lib/products";

const TABS = [
  { name: "index", title: "Home", icon: "home" },
  { name: "explore", title: "Explore", icon: "compass" },
  { name: "keranjang", title: "Keranjang", icon: "cart" },
  { name: "profil", title: "Profil", icon: "person" },
] as const;

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: C.primary,
        tabBarInactiveTintColor: C.sub,
        tabBarStyle: {
          backgroundColor: "#FFFEFB",
          borderTopColor: C.border,
          height: 76,
          paddingTop: 8,
        },
        tabBarLabelStyle: { fontSize: 10 },
      }}
    >
      {TABS.map((t) => (
        <Tabs.Screen
          key={t.name}
          name={t.name}
          options={{
            title: t.title,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={t.icon}
                size={22}
                color={focused ? C.primary : C.sub}
                style={focused ? undefined : { opacity: 0.6 }}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
