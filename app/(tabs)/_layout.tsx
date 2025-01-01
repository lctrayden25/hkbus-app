import React from "react";
import { Stack, Tabs } from "expo-router";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const TabsLayout = () => {
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: "#fff7ed",
					tabBarInactiveTintColor: "black",
					tabBarStyle: {
						backgroundColor: "#fb923c",
					},
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: "首頁",
						headerShown: false,
						tabBarLabelStyle: {
							fontSize: 12,
						},
						tabBarIcon: ({ color, size, focused }) => {
							return <Icon name="home" size={18} color={color} />;
						},
					}}
				/>
				<Tabs.Screen
					name="search"
					options={{
						title: "搜尋",
						headerShown: false,
						tabBarLabelStyle: {
							fontSize: 12,
						},
						tabBarIcon: ({ color, size, focused }) => {
							return <Icon name="search" size={18} color={color} />;
						},
					}}
				/>
				<Tabs.Screen
					name="notice"
					options={{
						title: "通告",
						headerShown: false,
						tabBarLabelStyle: {
							fontSize: 12,
						},
						tabBarIcon: ({ color, size, focused }) => {
							return <Icon name="bell" size={18} color={color} />;
						},
					}}
				/>
			</Tabs>
		</>
	);
};

export default TabsLayout;
