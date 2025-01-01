import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter, useLocalSearchParams } from "expo-router";

const RouteSlug = () => {
	const router = useRouter();
	const params = useLocalSearchParams();

	return (
		<View className="flex items-center justify-center fle-1 p-5">
			<Pressable onPress={() => router.push("/search")}>
				<Text className="text-xl">Go back {params.routeId}</Text>
			</Pressable>
		</View>
	);
};

export default RouteSlug;
