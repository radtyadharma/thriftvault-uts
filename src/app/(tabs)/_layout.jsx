import React from "react";
import Lucide from "@react-native-vector-icons/lucide";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#D96B27",
        tabBarInactiveTintColor: "#6B655C",
        tabBarStyle: {
          backgroundColor: "#FFFEFB",
          borderTopColor: "#E6E1D6",
          height: 76,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Lucide name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Lucide name="compass" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="keranjang"
        options={{
          title: "Keranjang",
          tabBarIcon: ({ color }) => (
            <Lucide name="shopping-cart" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => (
            <Lucide name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
