import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: "orange" }}>
			<Tabs.Screen name="index" options={{ title: "首頁" }} />
			<Tabs.Screen name="search" options={{ title: "搜尋" }} />
			<Tabs.Screen name="notice" options={{ title: "通告" }} />
		</Tabs>
	);
};

export default TabsLayout;
