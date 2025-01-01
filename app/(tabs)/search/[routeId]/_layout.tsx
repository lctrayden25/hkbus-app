import { View, Text, Button } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

const RouteSlugLayout = () => {
	const router = useRouter();
	const params = useLocalSearchParams();
	const routeId = params?.routeId as string;
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: "#fb923c",
				},
				headerTitle: `Route ${routeId}`,
				presentation: "card",
				headerLeft: () => {
					return (
						<Button
							onPress={() => router.push("/search")}
							title="Back"
							color={"black"}
						/>
					);
				},
			}}
		/>
	);
};

export default RouteSlugLayout;
