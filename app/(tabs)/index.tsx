import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { useKmbRouteList } from "@/hooks/api";
import { Link, useRouter } from "expo-router";

const HomeScreen = () => {
	const { data } = useKmbRouteList();
	const router = useRouter();

	return (
		<View style={{ flex: 1 }}>
			<Text>Home Screen</Text>
		</View>
	);
};

export default HomeScreen;
