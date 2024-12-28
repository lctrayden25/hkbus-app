import { View, Text } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const SearchLayout = () => {
	return (
		<View>
			<Text>Search Layout</Text>
			<Slot />
		</View>
	);
};

export default SearchLayout;
