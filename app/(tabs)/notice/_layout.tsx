import { View, Text } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const NoticeLayout = () => {
	return (
		<View>
			<Text>_Notice layout</Text>
			<Slot />
		</View>
	);
};

export default NoticeLayout;
