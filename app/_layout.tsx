import { Stack } from "expo-router";

// Import your global CSS file
import "../global.css";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text } from "react-native";

export default function RootLayout() {
	// const insets = useSafeAreaInsets();
	const insets = useSafeAreaInsets();
	console.log("test");
	return (
		<View style={{ flex: 1, paddingTop: insets.top }} className="bg-orange-400">
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="test" options={{ title: "測試" }} />
			</Stack>
		</View>
	);
}
