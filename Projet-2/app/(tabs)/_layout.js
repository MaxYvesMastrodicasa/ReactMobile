import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const colorI = "#c36878";
const colorA = "#645c64";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colorI },
        headerTitleAlign: "center",
        tabBarActiveTintColor: colorA,
        tabBarInactiveTintColor: colorI,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="goodDeed"
        options={{
          title: "Mes Bonnes Actions",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="donation"
        options={{
          title: "Donations",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="hand-coin"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="info1"
        options={{
          title: "Inforamtions",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mention"
        options={{
          title: "Mention Légales",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-certificate"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
